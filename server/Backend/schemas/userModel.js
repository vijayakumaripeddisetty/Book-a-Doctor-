const mongoose = require('mongoose');

const userModel = mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, 'Full name is required'],
      set: function (value) {
        return value.charAt(0).toUpperCase() + value.slice(1);
      },
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
    },
    isdoctor: {
      type: Boolean,
      default: false,
    },
    notification: {
      type: Array,
      default: [],
    },
    seennotification: {
      type: Array,
      default: [],
    },
    documents: {
      type: Array,
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

const userSchema = mongoose.model('user', userModel);
module.exports = userSchema;