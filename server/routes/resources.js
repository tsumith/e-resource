const express = require('express');
const router = express.Router();
const Resource = require('../models/Resource');
const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ message: 'Token missing' });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        return res.status(403).json({ message: 'Invalid token' });
    }
};

// POST /api/resources/upload
router.post('/upload', authenticate, async (req, res) => {
    console.log('Upload request body:', req.body);
    console.log('Authenticated user:', req.user);
    try {
        const { title, course, type, author, link } = req.body;
        const newResource = new Resource({
            title,
            course,
            type,
            author,
            link,
            uploadedBy: req.user.id,
        });
        await newResource.save();
        res.status(201).json(newResource);
    } catch (err) {
        res.status(500).json({ message: 'Upload failed', error: err.message });
    }
});

// GET /api/resources
router.get('/', async (req, res) => {
    try {
        const resources = await Resource.find().populate('uploadedBy', 'email');
        res.json(resources);
    } catch (err) {
        res.status(500).json({ message: 'Fetch failed', error: err.message });
    }
});

module.exports = router;
