const express = require("express");
const multer = require("multer");
const authMiddleware = require("../middlewares/authMiddleware.js");
const {
  registerController,
  loginController,
  authController,
  docController,
  getallnotificationController,
  deleteallnotificationController,
  getAllDoctorsControllers,
  appointmentController,
  getAllUserAppointments,
  getDocsController,
} = require("../controllers/userController.js");

const router = express.Router();
const upload = multer({ dest: "uploads/" });

// Public routes
router.post("/register", registerController);
router.post("/login", loginController);

// Protected routes
router.post("/getuserdata", authMiddleware, authController);
router.post("/registerdoc", authMiddleware, docController);
router.get("/getalldoctorsu", authMiddleware, getAllDoctorsControllers);
router.post("/getappointment", authMiddleware, upload.single("image"), appointmentController);
router.post("/getallnotification", authMiddleware, getallnotificationController);
router.post("/deleteallnotification", authMiddleware, deleteallnotificationController);
router.get("/getuserappointments", authMiddleware, getAllUserAppointments);
router.get("/getDocsforuser", authMiddleware, getDocsController);

module.exports = router;