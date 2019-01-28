"use strict";

const mongoose = require("mongoose");
const timestamps = require('mongoose-timestamp');
const Schema = mongoose.Schema;

let LoginScheme = new Schema({
  email: { type: String, required: true, max: 100, },
  password: { type: String, required: true, max: 100, },
});

LoginScheme.plugin(timestamps);

// Export the model
const Login = mongoose.model("Login", LoginScheme);