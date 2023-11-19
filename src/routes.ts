import { Router } from "express";
import { AdminController } from "./controllers/admincontroller";
import { Participantcontroller } from "./controllers/participantcontroller";

const router: Router = Router();
const adminController: AdminController = new AdminController();
const participant: Participantcontroller = new Participantcontroller;

router.get("/organizer/get-events", adminController.getAllEvents.bind(adminController));
router.post("/organizer/create-events", adminController.createEvent.bind(adminController));
router.put("/organizer/update-events/:id", adminController.updateEvent.bind(adminController));
router.delete("/organizer/delete-events/:id", adminController.deleteEvent.bind(adminController));

router.get("/organizer/get-categories", adminController.getAllCategories.bind(adminController));
router.post("/organizer/create-categories", adminController.createCategory.bind(adminController));
router.put("/organizer/update-categories/:id", adminController.updateCategory.bind(adminController));
router.delete("/organizer/delete-categories/:id", adminController.deleteCategory.bind(adminController));

router.get("/organizer/get-locals", adminController.getAllLocals.bind(adminController));
router.post("/organizer/create-locals", adminController.createLocal.bind(adminController));
router.put("/organizer/update-locals/:id", adminController.updateLocal.bind(adminController));
router.delete("/organizer/delete-locals/:id", adminController.deleteLocal.bind(adminController));

router.get('/participante/get-events',participant.getAllEvents);
router.get('/participante/get-events/local/:local',participant.getEventByLocal);
router.get('/participante/get-events/date/:date',participant.getEventByDate);
router.get('/participante/get-events/category/:category',participant.getEventByCategory);

export { router };
