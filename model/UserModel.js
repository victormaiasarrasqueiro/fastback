const mongoose = require('mongoose');
const db = require('../config/Database');

const schema = new mongoose.Schema({
  name: { type: String, unique: false, required: [true, 'Name is required'] },
  surname: { type: String, unique: false, required: [true, 'Surname is required'] },
  email: { type: String, unique: true, required: [true, 'Email is required'] },
  perfil: { type: String, unique: true, required: [true, 'Email is required'] },
  password: { type: String, unique: false, required: [true, 'Password is required'] },
  passwordTemp: { type: Boolean, unique: false, required: [true, 'Password is required'] },
}, {
  collection: 'User',
  additionalProperties: false,
  versionKey: false,
  timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' },
});

schema.virtual('id').get(function () {
  return this._id;
});

module.exports = db.mongooseConnection().model('User', schema);
