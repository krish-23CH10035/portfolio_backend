import Project from '../models/Project.js';

export const getProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    console.log(`[GET /api/projects] Success: Fetched ${projects.length} projects.`);
    res.json({ success: true, count: projects.length, data: projects, message: 'Projects fetched successfully.' });
  } catch (error) {
    console.error(`[GET /api/projects] Error:`, error);
    res.status(500).json({ success: false, error: 'Failed to fetch projects', details: error.message });
  }
};

export const createProject = async (req, res) => {
  try {
    const project = new Project(req.body);
    await project.save();
    console.log(`[POST /api/projects] Success: Project created with id ${project._id}`);
    res.status(201).json({ success: true, data: project, message: 'Project created successfully.' });
  } catch (error) {
    console.error(`[POST /api/projects] Error:`, error);
    res.status(400).json({ success: false, error: 'Failed to create project', details: error.message });
  }
};
