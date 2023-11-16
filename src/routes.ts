import { Router } from "express";
import { AdminController } from "./controllers/admincontroller";

const router: Router = Router();
const adminController: AdminController = new AdminController();

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

export { router };
