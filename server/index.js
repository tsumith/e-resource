// server/index.js
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const uploadRoutes = require('./upload');
require('dotenv').config();
const app = express();
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));
app.use('/api/upload', uploadRoutes);

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected'));

app.listen(5000, () => console.log('Server started on port 5000'));
