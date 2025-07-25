import express from 'express';
import { getProjects, createProject } from '../controllers/projectController.js';
import { adminAuth } from '../middleware/adminAuth.js';

const router = express.Router();

router.get('/', getProjects);
router.post('/', adminAuth, createProject);

export default router;
