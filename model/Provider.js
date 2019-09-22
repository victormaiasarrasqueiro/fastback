const mongoose = require('mongoose');
const db = require('../config/Database');

const schema = new mongoose.Schema({
  project: { type: String, unique: false, required: [true, 'Project is required'] },
  local: { type: String, unique: false, required: [true, 'Local is required'] },
  message: { type: String, unique: false, required: [true, 'Message is required'] },
  stack: { type: String, unique: false, required: [true, 'Stack is required'] },
  priority: { type: Number, unique: false, required: [true, 'Priority is required'] },
}, {
  collection: 'Log',
  additionalProperties: false,
  versionKey: false,
  timestamps: { createdAt: 'createdAt' },
});

schema.virtual('id').get(function () {
  return this._id;
});

module.exports = db.mongooseConnection().model('Log', schema);
