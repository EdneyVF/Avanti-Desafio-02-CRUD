import { Router } from "express";
import { AdminController } from "./controllers/admincontroller";
import { Participantcontroller } from "./controllers/participantcontroller";

const router: Router = Router();
const adminController: AdminController = new AdminController();
const participant: Participantcontroller = new Participantcontroller;

router.get("/get-events", adminController.getAllEvents.bind(adminController));
router.post("/create-events", adminController.createEvent.bind(adminController));
router.put("/update-events/:id", adminController.updateEvent.bind(adminController));
router.delete("/delete-events/:id", adminController.deleteEvent.bind(adminController));

router.get("/get-categories", adminController.getAllCategories.bind(adminController));
router.post("/create-categories", adminController.createCategory.bind(adminController));
router.put("/update-categories/:id", adminController.updateCategory.bind(adminController));
router.delete("/delete-categories/:id", adminController.deleteCategory.bind(adminController));

router.get("/get-locals", adminController.getAllLocals.bind(adminController));
router.post("/create-locals", adminController.createLocal.bind(adminController));
router.put("/update-locals/:id", adminController.updateLocal.bind(adminController));
router.delete("/delete-locals/:id", adminController.deleteLocal.bind(adminController));

router.get('/participante/get-events',participant.getAllEvents);
router.get('/participante/get-events/:local',participant.getEventByLocal);
router.get('/participante/get-events/:date',participant.getEventByDate);
router.get('/participante/get-events/:category',participant.getEventByCategory);

export { router };
