const docSchema = require("../schemas/docModel");
const appointmentSchema = require("../schemas/appointmentModel");
const userSchema = require("../schemas/userModel");
const fs = require("fs");
const path = require("path");

// Update doctor profile
const updateDoctorProfileController = async (req, res) => {
  try {
    const doctor = await docSchema.findOneAndUpdate(
      { userId: req.body.userId },
      req.body,
      { new: true }
    );
    if (!doctor) {
      return res.status(404).send({
        message: "Doctor not found",
        success: false,
      });
    }
    return res.status(200).send({
      success: true,
      data: doctor,
      message: "Successfully updated profile",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      message: "Something went wrong",
      success: false,
    });
  }
};

// Get all appointments for this doctor
const getAllDoctorAppointmentsController = async (req, res) => {
  try {
    const doctor = await docSchema.findOne({ userId: req.body.userId });
    if (!doctor) {
      return res.status(404).send({
        message: "Doctor not found",
        success: false,
      });
    }
    const appointments = await appointmentSchema.find({
      doctorId: doctor._id,
    });
    return res.status(200).send({
      message: "All the appointments are listed below.",
      success: true,
      data: appointments,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      message: "Something went wrong",
      success: false,
    });
  }
};

// Handle appointment status (approve/reject)
const handleStatusController = async (req, res) => {
  try {
    const { appointmentId, status, userid } = req.body;
    const appointment = await appointmentSchema.findByIdAndUpdate(
      appointmentId,
      { status },
      { new: true }
    );
    if (!appointment) {
      return res.status(404).send({
        message: "Appointment not found",
        success: false,
      });
    }

    // Notify the user
    const user = await userSchema.findById(userid);
    if (user) {
      user.notification.push({
        type: "appointment-status-updated",
        message: `Your appointment has been ${status}`,
        onClickPath: "/appointments",
      });
      await user.save();
    }

    return res.status(200).send({
      message: "Appointment status updated successfully",
      success: true,
      data: appointment,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      message: "Something went wrong",
      success: false,
    });
  }
};

// Download document attached to an appointment
const documentDownloadController = async (req, res) => {
  try {
    const { appointId } = req.query;
    if (!appointId) {
      return res.status(400).send({
        message: "Appointment ID is required",
        success: false,
      });
    }

    const appointment = await appointmentSchema.findById(appointId);
    if (!appointment) {
      return res.status(404).send({
        message: "Appointment not found",
        success: false,
      });
    }

    const document = appointment.document;
    if (!document || !document.path) {
      return res.status(404).send({
        message: "Document not found for this appointment",
        success: false,
      });
    }

    const absolutePath = path.join(__dirname, "..", document.path);
    if (!fs.existsSync(absolutePath)) {
      return res.status(404).send({
        message: "File not found on server",
        success: false,
      });
    }

    res.setHeader(
      "Content-Disposition",
      `attachment; filename="${path.basename(absolutePath)}"`
    );
    res.setHeader("Content-Type", "application/octet-stream");

    const fileStream = fs.createReadStream(absolutePath);
    fileStream.pipe(res);
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      message: "Something went wrong",
      success: false,
    });
  }
};

module.exports = {
  updateDoctorProfileController,
  getAllDoctorAppointmentsController,
  handleStatusController,
  documentDownloadController,
};