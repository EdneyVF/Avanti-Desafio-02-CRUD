import {Request,Response} from 'express';
import { prismaClient } from '../database/prismaClient';

export class Participantcontroller{

    async getAllEvents(req:Request, res: Response){ // Mostra todos os eventos ao usuario
        try {
            const events = await prismaClient.eventos.findMany();
            res.json(events);
          } catch (error) {
            res.status(500).json({ error: 'Error fetching events' });
          }

    }

    async getEventByLocal(req:Request, res: Response){ // Mostra os eventos de acordo com o local pedido pelo usuario
        const { local } = req.params;
    try {
      const events = await prismaClient.eventos.findMany({
        where: {
          local: local,
        },
      });
      res.json(events);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching events by local' }); 
    }
    }

    async getEventByHour(req:Request, res: Response){ // Mostra os eventos de acordo com a data pedida pelo usuario
        const { hour } = req.params;
    try {
      const events = await prismaClient.eventos.findMany({
        where: {
          data: new Date(hour),
        },
      });
      res.json(events);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching events by hour' });
    }
    }

    async getEventByCategory(req:Request, res: Response){  // Mostra todos os eventos de acordo com a categoria pedida pelo usuario
        const { category } = req.params;
    try {
      const events = await prismaClient.eventos.findMany({
        where: {
          categoria: category,
        },
      });
      res.json(events);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching events by category' });
    }
        
    }
   




}