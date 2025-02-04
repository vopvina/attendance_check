const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const teacherSchema = new mongoose.Schema({
    id: { type: Number, required: true, unique: true },
    name: { type: String, required: true },
    subject: { type: String, required: true },
    login: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    students: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Student' }],
});


module.exports = mongoose.model('Teacher', teacherSchema);
