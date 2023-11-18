import {Request,Response} from 'express';
import { prismaClient } from '../database/prismaClient';

export class Participantcontroller{

    async getAllEvents(req:Request, res: Response){ // Mostra todos os eventos ao usuario
        try {
            const events = await prismaClient.event.findMany();
            res.json(events);
          } catch (error) {
            res.status(500).json({ error: 'Erro na busca pelos eventos' });
          }

    }

    async getEventByLocal(req:Request, res: Response){ // Mostra os eventos de acordo com o local pedido pelo usuario
        const { local } = req.params;
    try {
      const events = await prismaClient.event.findMany({
        where: {
          locationId : local,
        },
      });
      res.json(events);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao tentar achar os eventos deste local' }); 
    }
    }

    async getEventByDate(req:Request, res: Response){ // Mostra os eventos de acordo com a data pedida pelo usuario
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

    async getEventByCategory(req:Request, res: Response){  // Mostra todos os eventos de acordo com a categoria pedida pelo usuario
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