const docSchema = require("../schemas/docModel");
const userSchema = require("../schemas/userModel");
const appointmentSchema = require("../schemas/appointmentModel");

// Get all users
const getAllUsersControllers = async (req, res) => {
  try {
    const users = await userSchema.find({});
    return res.status(200).send({
      message: "Users data list",
      success: true,
      data: users,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      message: "Something went wrong",
      success: false,
    });
  }
};

// Get all doctors
const getAllDoctorsControllers = async (req, res) => {
  try {
    const docUsers = await docSchema.find({});
    return res.status(200).send({
      message: "Doctor Users data list",
      success: true,
      data: docUsers,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      message: "Something went wrong",
      success: false,
    });
  }
};

// Approve a doctor
const getStatusApproveController = async (req, res) => {
  try {
    const { doctorId, status, userid } = req.body;

    const doctor = await docSchema.findOneAndUpdate(
      { _id: doctorId },
      { status },
      { new: true }
    );

    const user = await userSchema.findOne({ _id: userid });

    // Add notification
    user.notification.push({
      type: "doctor-account-approved",
      message: `Your Doctor account has been ${status}`,
      onClickPath: "/notification",
    });

    if (status === "approved") {
      user.isdoctor = true;
    }

    await user.save();
    await doctor.save();

    return res.status(201).send({
      message: "Successfully updated status of the doctor!",
      success: true,
      data: doctor,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      message: "Something went wrong",
      success: false,
    });
  }
};

// Reject a doctor
const getStatusRejectController = async (req, res) => {
  try {
    const { doctorId, status, userid } = req.body;

    const doctor = await docSchema.findOneAndUpdate(
      { _id: doctorId },
      { status },
      { new: true }
    );

    const user = await userSchema.findOne({ _id: userid });

    user.notification.push({
      type: "doctor-account-rejected",
      message: `Your Doctor account has been ${status}`,
      onClickPath: "/notification",
    });

    await user.save();
    await doctor.save();

    return res.status(201).send({
      message: "Successfully updated Rejected status of the doctor!",
      success: true,
      data: doctor,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      message: "Something went wrong",
      success: false,
    });
  }
};

// Get all appointments (for admin)
const displayAllAppointmentController = async (req, res) => {
  try {
    const allAppointments = await appointmentSchema.find();
    return res.status(200).send({
      success: true,
      message: "Successfully fetched All Appointments",
      data: allAppointments,
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
  getAllDoctorsControllers,
  getAllUsersControllers,
  getStatusApproveController,
  getStatusRejectController,
  displayAllAppointmentController,
};