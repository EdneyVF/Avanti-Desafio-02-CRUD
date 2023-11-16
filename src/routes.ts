import { Router } from "express";
import { AdminController } from "./controllers/admincontroller";
import { Participantcontroller } from "./controllers/participantcontroller";

const router: Router = Router();
const adminController: AdminController = new AdminController();
const participant: Participantcontroller = new Participantcontroller;

router.get("/events", adminController.getAllEvents.bind(adminController));
router.post("/events", adminController.createEvent.bind(adminController));
router.put("/events/:id", adminController.updateEvent.bind(adminController));
router.delete("/events/:id", adminController.deleteEvent.bind(adminController));

router.post("/categories", adminController.createCategory.bind(adminController));
router.put("/categories/:id", adminController.updateCategory.bind(adminController));
router.delete("/categories/:id", adminController.deleteCategory.bind(adminController));

router.post("/locals", adminController.createLocal.bind(adminController));
router.put("/locals/:id", adminController.updateLocal.bind(adminController));
router.delete("/locals/:id", adminController.deleteLocal.bind(adminController));

router.get('/participante',participant.getAllEvents);
router.get('/participante/:local',participant.getEventByLocal);
router.get('/participante/:hour',participant.getEventByHour);
router.get('/participante/:category',participant.getEventByCategory);

export { router };
