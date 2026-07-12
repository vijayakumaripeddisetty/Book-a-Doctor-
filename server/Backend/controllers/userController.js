const userSchema = require("../schemas/userModel");
const docSchema = require("../schemas/docModel");
const appointmentSchema = require("../schemas/appointmentModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Register a new user
const registerController = async (req, res) => {
  try {
    const existingUser = await userSchema.findOne({ email: req.body.email });
    if (existingUser) {
      return res.status(200).send({
        message: "User already exists",
        success: false,
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    req.body.password = hashedPassword;

    const newUser = new userSchema(req.body);
    await newUser.save();

    return res.status(201).send({
      message: "Register Success",
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: `Error: ${error.message}`,
    });
  }
};

// Login user
const loginController = async (req, res) => {
  try {
    const user = await userSchema.findOne({ email: req.body.email });
    if (!user) {
      return res.status(200).send({
        message: "User not found",
        success: false,
      });
    }

    const isMatch = await bcrypt.compare(req.body.password, user.password);
    if (!isMatch) {
      return res.status(200).send({
        message: "Invalid email or password",
        success: false,
      });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_KEY, {
      expiresIn: "1d",
    });

    return res.status(200).send({
      message: "Login successful",
      success: true,
      data: {
        token,
        userId: user._id,
        isdoctor: user.isdoctor,
      },
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      message: `Error: ${error.message}`,
      success: false,
    });
  }
};

// Get user data (authenticated)
const authController = async (req, res) => {
  try {
    const user = await userSchema.findById(req.body.userId);
    if (!user) {
      return res.status(404).send({
        message: "User not found",
        success: false,
      });
    }
    const { password, ...userData } = user._doc;
    return res.status(200).send({
      success: true,
      data: userData,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      message: "Something went wrong",
      success: false,
    });
  }
};

// Apply for doctor account
const docController = async (req, res) => {
  try {
    const { userId, ...doctorInfo } = req.body;

    // Check if user already applied
    const existingDoc = await docSchema.findOne({ userId });
    if (existingDoc) {
      return res.status(200).send({
        message: "You have already applied for doctor account",
        success: false,
      });
    }

    const newDoctor = new docSchema({ userId, ...doctorInfo, status: "pending" });
    await newDoctor.save();

    // Notify admin (for simplicity, we can just log or create a notification for admin)
    // We'll send a notification to admin by creating a system notification (admin can be a special user)
    // For this example, we will assume admin is a user with id "admin" or we'll just log
    console.log("New doctor application received");

    // Optionally, notify admin (if we have an admin user)
    // const admin = await userSchema.findOne({ isAdmin: true });
    // if (admin) {
    //   admin.notification.push({
    //     type: "new-doctor-request",
    //     message: `${newDoctor.fullName} has applied for doctor account`,
    //     onClickPath: "/admin/doctors",
    //   });
    //   await admin.save();
    // }

    return res.status(201).send({
      message: "Doctor application submitted successfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      message: "Something went wrong",
      success: false,
    });
  }
};

// Get all notifications (mark as seen)
const getallnotificationController = async (req, res) => {
  try {
    const user = await userSchema.findById(req.body.userId);
    if (!user) {
      return res.status(404).send({
        message: "User not found",
        success: false,
      });
    }

    // Move notifications to seen
    const seenNotifications = user.notification;
    user.seennotification.push(...seenNotifications);
    user.notification = [];
    await user.save();

    return res.status(200).send({
      message: "Notifications fetched",
      success: true,
      data: user.seennotification,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      message: "Something went wrong",
      success: false,
    });
  }
};

// Delete all notifications
const deleteallnotificationController = async (req, res) => {
  try {
    const user = await userSchema.findById(req.body.userId);
    if (!user) {
      return res.status(404).send({
        message: "User not found",
        success: false,
      });
    }

    user.notification = [];
    user.seennotification = [];
    await user.save();

    return res.status(200).send({
      message: "Notifications deleted",
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      message: "Something went wrong",
      success: false,
    });
  }
};

// Get all approved doctors (for user to view)
const getAllDoctorsControllers = async (req, res) => {
  try {
    const doctors = await docSchema.find({ status: "approved" });
    return res.status(200).send({
      message: "Doctors list",
      success: true,
      data: doctors,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      message: "Something went wrong",
      success: false,
    });
  }
};

// Book an appointment (with file upload)
const appointmentController = async (req, res) => {
  try {
    const { userId, doctorInfo, userInfo, date } = req.body;
    // doctorInfo and userInfo are expected to be JSON strings in the request
    const parsedDoctorInfo = JSON.parse(doctorInfo);
    const parsedUserInfo = JSON.parse(userInfo);

    const appointmentData = {
      userId,
      doctorId: parsedDoctorInfo._id,
      userInfo: parsedUserInfo,
      doctorInfo: parsedDoctorInfo,
      date,
      document: req.file ? {
        path: req.file.path,
        originalName: req.file.originalname,
      } : null,
      status: "pending",
    };

    const newAppointment = new appointmentSchema(appointmentData);
    await newAppointment.save();

    // Notify doctor (via user associated with doctor)
    const doctorUser = await userSchema.findById(parsedDoctorInfo.userId);
    if (doctorUser) {
      doctorUser.notification.push({
        type: "new-appointment",
        message: `New appointment booked by ${parsedUserInfo.fullName}`,
        onClickPath: "/doctor/appointments",
      });
      await doctorUser.save();
    }

    return res.status(201).send({
      message: "Appointment booked successfully",
      success: true,
      data: newAppointment,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      message: "Something went wrong",
      success: false,
    });
  }
};

// Get appointments for the logged-in user
const getAllUserAppointments = async (req, res) => {
  try {
    const userId = req.body.userId;
    const appointments = await appointmentSchema.find({ userId });

    // Get doctor details for each appointment
    const doctorIds = appointments.map((app) => app.doctorId);
    const doctors = await docSchema.find({ _id: { $in: doctorIds } });

    const appointmentsWithDoctor = appointments.map((app) => {
      const doctor = doctors.find(
        (doc) => doc._id.toString() === app.doctorId.toString()
      );
      return {
        ...app.toObject(),
        docName: doctor ? doctor.fullName : "",
      };
    });

    return res.status(200).send({
      message: "All the appointments are listed below.",
      success: true,
      data: appointmentsWithDoctor,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      message: "Something went wrong",
      success: false,
    });
  }
};

// Get documents for the logged-in user
const getDocsController = async (req, res) => {
  try {
    const user = await userSchema.findById(req.body.userId);
    if (!user) {
      return res.status(404).send({
        message: "User not found",
        success: false,
      });
    }

    const documents = user.documents || [];
    return res.status(200).send({
      message: "Documents list",
      success: true,
      data: documents,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      message: "Something went wrong",
      success: false,
    });
  }
};

module.exports = {
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
};