import express from 'express';
import { getExperiences, createExperience } from '../controllers/experienceController.js';
import { adminAuth } from '../middleware/adminAuth.js';

const router = express.Router();

router.get('/', getExperiences);
router.post('/', adminAuth, createExperience);

export default router;
