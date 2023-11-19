import { Request, Response } from 'express';
import { prismaClient } from '../database/prismaClient';
import { AuthService } from '../services/authService';
import jwt from 'jsonwebtoken';

export class AdminController {
  private authService: AuthService = new AuthService();

  async login(req: Request, res: Response) {
    const { email, password } = req.body;
    try {
      const { token, user } = await this.authService.login(email, password);
      if (!user.isAdmin) {
        return res.status(403).json({ error: 'Access denied' });
      }
      res.json({ token, userId: user.id });
    } catch (error) {
      res.status(400).json({ error: 'An error occurred' });
    }
  }

  async signup(req: Request, res: Response) {
    const { email, password } = req.body;
    try {
      const user = await this.authService.signup(email, password, true);
      res.status(201).json({ userId: user.id });
    } catch (error) {
      res.status(400).json({ error: 'An error occurred' });
    }
  }

  async getAllEvents(request: Request, response: Response) {
    try {
      const events = await prismaClient.event.findMany();
      response.json(events);
    } catch (error) {
      response.status(500).json({ error: 'Error fetching events' });
    }
  }

  async getAllCategories(request: Request, response: Response) {
    try {
      const categories = await prismaClient.category.findMany({
        select: { id: true, name: true },
      });

      return response.json(categories);
    } catch (error) {
      return response.status(500).json({ error: 'An error occurred' });
    }
  }

  async getAllLocals(request: Request, response: Response) {
    try {
      const locals = await prismaClient.local.findMany({
        select: { id: true, name: true },
      });

      return response.json(locals);
    } catch (error) {
      return response.status(500).json({ error: 'An error occurred' });
    }
  }

  async createEvent(request: Request, response: Response) {
    try {
      const { name, date, categoryId, locationId } = request.body;

      const event = await prismaClient.event.create({
        data: {
          name,
          date,
          category: {
            connect: { id: categoryId },
          },
          location: {
            connect: { id: locationId },
          },
        },
      });

      return response.status(201).json(event);
    } catch (error) {
      return response.status(500).json({ error: 'An error occurred' });
    }
  }

  async updateEvent(req: Request, res: Response) {
    try {
      const eventId = req.params.id;
      const { name, date, categoryId, locationId } = req.body;

      const updatedEvent = await prismaClient.event.update({
        where: { id: eventId },
        data: {
          name,
          date,
          categoryId,
          locationId,
        },
      });

      return res.json(updatedEvent);
    } catch (error) {
      return res.status(500).json({ error: 'An error occurred' });
    }
  }

  async createCategory(request: Request, response: Response) {
    try {
      const { name } = request.body;

      const category = await prismaClient.category.create({
        data: {
          name,
        },
      });

      return response.status(201).json(category);
    } catch (error) {
      return response.status(500).json({ error: 'An error occurred' });
    }
  }

  async updateCategory(request: Request, response: Response) {
    try {
      const categoryId = request.params.id;
      const { name } = request.body;

      const updatedCategory = await prismaClient.category.update({
        where: { id: categoryId },
        data: {
          name,
        },
      });

      return response.json(updatedCategory);
    } catch (error) {
      return response.status(500).json({ error: 'An error occurred' });
    }
  }

  async createLocal(request: Request, response: Response) {
    try {
      const { name } = request.body;

      const local = await prismaClient.local.create({
        data: {
          name,
        },
      });

      return response.status(201).json(local);
    } catch (error) {
      return response.status(500).json({ error: 'An error occurred' });
    }
  }

  async updateLocal(request: Request, response: Response) {
    try {
      const localId = request.params.id;
      const { name } = request.body;

      const updatedLocal = await prismaClient.local.update({
        where: { id: localId },
        data: {
          name,
        },
      });

      return response.json(updatedLocal);
    } catch (error) {
      return response.status(500).json({ error: 'An error occurred' });
    }
  }

  async deleteEvent(request: Request, response: Response) {
    try {
      const eventId = request.params.id;

      await prismaClient.event.delete({
        where: { id: eventId },
      });

      return response.status(204).send();
    } catch (error) {
      return response.status(500).json({ error: 'An error occurred' });
    }
  }

  async deleteCategory(request: Request, response: Response) {
    try {
      const categoryId = request.params.id;

      await prismaClient.category.delete({
        where: { id: categoryId },
      });

      return response.status(204).send();
    } catch (error) {
      return response.status(500).json({ error: 'An error occurred' });
    }
  }

  async deleteLocal(request: Request, response: Response) {
    try {
      const localId = request.params.id;

      await prismaClient.local.delete({
        where: { id: localId },
      });

      return response.status(204).send();
    } catch (error) {
      return response.status(500).json({ error: 'An error occurred' });
    }
  }
}
