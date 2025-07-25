import express from 'express';
import { getAchievements, createAchievement } from '../controllers/achievementController.js';
import { adminAuth } from '../middleware/adminAuth.js';

const router = express.Router();

router.get('/', getAchievements);
router.post('/', adminAuth, createAchievement);

export default router;
