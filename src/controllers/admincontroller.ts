import { Request, Response } from 'express';
import { prismaClient } from '../database/prismaClient';

export class AdminController {
  async getAllEvents(request: Request, response: Response) {
    try {
      const events = await prismaClient.event.findMany();
      response.json(events);
    } catch (error) {
      response.status(500).json({ error: 'Error fetching events' });
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

  async updateEvent(request: Request, response: Response) {
    try {
      const eventId = parseInt(request.params.id);
      const { name, date, categoryId, locationId } = request.body;

      const updatedEvent = await prismaClient.event.update({
        where: { id: eventId },
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

      return response.json(updatedEvent);
    } catch (error) {
      return response.status(500).json({ error: 'An error occurred' });
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
      const categoryId = parseInt(request.params.id);
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
      const localId = parseInt(request.params.id);
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
      const eventId = parseInt(request.params.id);

      await prismaClient.event.delete({
        where: { id: eventId },
      });

      return response.status(204).send(); // Resposta de sucesso sem conteúdo
    } catch (error) {
      return response.status(500).json({ error: 'An error occurred' });
    }
  }

  async deleteCategory(request: Request, response: Response) {
    try {
      const categoryId = parseInt(request.params.id);

      await prismaClient.category.delete({
        where: { id: categoryId },
      });

      return response.status(204).send(); // Resposta de sucesso sem conteúdo
    } catch (error) {
      return response.status(500).json({ error: 'An error occurred' });
    }
  }

  async deleteLocal(request: Request, response: Response) {
    try {
      const localId = parseInt(request.params.id);

      await prismaClient.local.delete({
        where: { id: localId },
      });

      return response.status(204).send(); // Resposta de sucesso sem conteúdo
    } catch (error) {
      return response.status(500).json({ error: 'An error occurred' });
    }
  }
}
