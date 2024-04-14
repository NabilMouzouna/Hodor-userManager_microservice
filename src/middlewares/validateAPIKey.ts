import { NextFunction, Request, Response } from "express";
// TODO : need to be modified
const validateApiKey = (req: Request, res: Response, next: NextFunction) => {
    const apiKey = req.headers['api-key'];
    if (!apiKey || apiKey !== 'YOUR_API_KEY') {
        return res.status(401).json({ error: 'Unauthorized' });
    }
    next();
};