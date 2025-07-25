import Experience from '../models/Experience.js';

export const getExperiences = async (req, res) => {
  try {
    const experiences = await Experience.find();
    console.log(`[GET /api/experience] Success: Fetched ${experiences.length} experiences.`);
    res.json({ success: true, count: experiences.length, data: experiences, message: 'Experiences fetched successfully.' });
  } catch (error) {
    console.error(`[GET /api/experience] Error:`, error);
    res.status(500).json({ success: false, error: 'Failed to fetch experiences', details: error.message });
  }
};

export const createExperience = async (req, res) => {
  try {
    const experience = new Experience(req.body);
    await experience.save();
    console.log(`[POST /api/experience] Success: Experience created with id ${experience._id}`);
    res.status(201).json({ success: true, data: experience, message: 'Experience created successfully.' });
  } catch (error) {
    console.error(`[POST /api/experience] Error:`, error);
    res.status(400).json({ success: false, error: 'Failed to create experience', details: error.message });
  }
};
