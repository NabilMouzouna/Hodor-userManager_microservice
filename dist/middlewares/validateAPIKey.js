"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validateApiKey = (req, res, next) => {
    const apiKey = req.headers['api-key'];
    if (!apiKey || apiKey !== 'YOUR_API_KEY') {
        return res.status(401).json({ error: 'Unauthorized' });
    }
    next();
};
