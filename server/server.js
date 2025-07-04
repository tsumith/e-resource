const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

const authRoutes = require('./routes/auth');
const resourceRoutes = require('./routes/resources');

dotenv.config();
connectDB();

const app = express();

const allowedOrigins = [
    'https://e-resource-client.vercel.app',
    'http://localhost:3000' // <-- Add this for local development
];

app.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true // if you're using cookies or Authorization headers
}));

app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/resources', resourceRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
