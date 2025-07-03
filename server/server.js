const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

const authRoutes = require('./routes/auth');
const resourceRoutes = require('./routes/resources');

dotenv.config();
connectDB();

const app = express();
const allowedOrigin = process.env.FRONTEND_URI || 'http://localhost:3000';

app.use(cors({
    origin: allowedOrigin,
    credentials: true,
}));

app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/resources', resourceRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
