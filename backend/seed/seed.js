require('dotenv').config();
const mongoose = require('mongoose');
const User = require('../models/User');
const Attendance = require('../models/Attendance');
const bcrypt = require('bcryptjs');

const mongoUri = process.env.MONGO_URI;

const seed = async () => {
  await mongoose.connect(mongoUri);
  console.log('Connected to db');

  await User.deleteMany({});
  await Attendance.deleteMany({});

  const users = [
    { name: 'Alice Employee', email: 'alice@example.com', password: 'password123', role: 'employee', employeeId: 'EMP001', department: 'Sales' },
    { name: 'Bob Employee', email: 'bob@example.com', password: 'password123', role: 'employee', employeeId: 'EMP002', department: 'HR' },
    { name: 'Manager Mike', email: 'manager@example.com', password: 'manager123', role: 'manager', employeeId: 'MGR001', department: 'Management' }
  ];

  for (let u of users) {
    const hashed = await bcrypt.hash(u.password, 10);
    const user = new User({ ...u, password: hashed });
    await user.save();
  }
  // create sample attendance rows for last 5 days for Alice
  const alice = await User.findOne({ email: 'alice@example.com' });
  const today = new Date();
  for (let i=0;i<5;i++){
    const d = new Date();
    d.setDate(today.getDate()-i);
    const dateStr = d.toISOString().split('T')[0];
    await Attendance.create({
      userId: alice._id,
      date: dateStr,
      checkInTime: new Date(d.getFullYear(), d.getMonth(), d.getDate(), 9, 0).toISOString(),
      checkOutTime: new Date(d.getFullYear(), d.getMonth(), d.getDate(), 17, 30).toISOString(),
      status: 'present',
      totalHours: 8.5
    });
  }

  console.log('Seed data created');
  mongoose.disconnect();
};

seed().catch(e => { console.error(e); process.exit(1); });
