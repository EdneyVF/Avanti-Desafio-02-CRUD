import { Router } from "express";
import { AdminController } from "./controllers/admincontroller";
import { ParticipantController } from "./controllers/participantcontroller";
// import { authenticateAdminToken, authenticateParticipantToken } from './middleware/ensureUsers'

const router: Router = Router();
const adminController: AdminController = new AdminController();
const participantController: ParticipantController = new ParticipantController();

router.post('/admin/signup', adminController.signup.bind(adminController));
router.post('/admin/login', adminController.login.bind(adminController));
router.get("/organizer/get-events", /*authenticateAdminToken,*/ adminController.getAllEvents.bind(adminController));
router.post("/organizer/create-events", /*authenticateAdminToken,*/ adminController.createEvent.bind(adminController));
router.put("/organizer/update-events/:id", /*authenticateAdminToken,*/ adminController.updateEvent.bind(adminController));
router.delete("/organizer/delete-events/:id", /*authenticateAdminToken,*/ adminController.deleteEvent.bind(adminController));

router.get("/organizer/get-categories", /*authenticateAdminToken,*/ adminController.getAllCategories.bind(adminController));
router.post("/organizer/create-categories", /*authenticateAdminToken,*/ adminController.createCategory.bind(adminController));
router.put("/organizer/update-categories/:id", /*authenticateAdminToken,*/ adminController.updateCategory.bind(adminController));
router.delete("/organizer/delete-categories/:id", /*authenticateAdminToken,*/ adminController.deleteCategory.bind(adminController));

router.get("/organizer/get-locals", /*authenticateAdminToken,*/ adminController.getAllLocals.bind(adminController));
router.post("/organizer/create-locals", /*authenticateAdminToken,*/ adminController.createLocal.bind(adminController));
router.put("/organizer/update-locals/:id", /*authenticateAdminToken,*/ adminController.updateLocal.bind(adminController));
router.delete("/organizer/delete-locals/:id", /*authenticateAdminToken,*/ adminController.deleteLocal.bind(adminController));

router.post('/participant/signup', participantController.signup.bind(participantController));
router.post('/participant/login', participantController.login.bind(participantController));
router.get('/participant/get-events', /*authenticateParticipantToken,*/ participantController.getAllEvents.bind(participantController));
router.get('/participant/get-events/${local}', /*authenticateParticipantToken,*/ participantController.getEventByLocal.bind(participantController));
router.get('/participant/get-events/${date}', /*authenticateParticipantToken,*/ participantController.getEventByDate.bind(participantController));
router.get('/participant/get-events/${category}', /*authenticateParticipantToken,*/ participantController.getEventByCategory.bind(participantController));
router.get('/participant/get-events/filter', /*authenticateParticipantToken,*/ participantController.getEventsByFilter.bind(participantController));

export { router };
