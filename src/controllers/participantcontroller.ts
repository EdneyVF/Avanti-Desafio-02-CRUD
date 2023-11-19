import { Request, Response } from 'express';
import { prismaClient } from '../database/prismaClient';
import { AuthService } from '../services/authService';
import jwt from 'jsonwebtoken';

export class ParticipantController {
  private authService: AuthService = new AuthService();

  async login(req: Request, res: Response) {
    const { email, password } = req.body;
    try {
      const { token, user } = await this.authService.login(email, password);
      if (user.isAdmin) {
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
      const user = await this.authService.signup(email, password, false);
      res.status(201).json({ userId: user.id });
    } catch (error) {
      res.status(400).json({ error: 'An error occurred' });
    }
  }

  async getAllEvents(req: Request, res: Response) {
    try {
      const events = await prismaClient.event.findMany();
      res.json(events);
    } catch (error) {
      res.status(500).json({ error: 'Erro na busca pelos eventos' });
    }
  }

  async getEventByLocal(req: Request, res: Response) {
    const { local } = req.params;
    try {
      const events = await prismaClient.event.findMany({
        where: {
          locationId: local,
        },
      });
      res.json(events);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao tentar achar os eventos deste local' });
    }
  }

  async getEventByDate(req: Request, res: Response) {
    const { date } = req.params;
    try {
      const events = await prismaClient.event.findMany({
        where: {
          date: new Date(date),
        },
      });
      res.json(events);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao tentar achar os eventos deste Horario' });
    }
  }

  async getEventByCategory(req: Request, res: Response) {
    const { category } = req.params;
    try {
      const events = await prismaClient.event.findMany({
        where: {
          categoryId: category,
        },
      });
      
      res.json(events);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao tentar achar os eventos desta categoria' });
    }
  }
}
