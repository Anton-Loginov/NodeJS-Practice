"use strict";

const mongoose = require("mongoose");
const timestamps = require('mongoose-timestamp');
const Schema = mongoose.Schema;

let ArticleScheme = new Schema({
  title: { type: String, required: true, max: 100, },
  description: { type: String, required: true, max: 100, },
});

ArticleScheme.plugin(timestamps);

// Export the model
const Article = mongoose.model("Article", ArticleScheme);