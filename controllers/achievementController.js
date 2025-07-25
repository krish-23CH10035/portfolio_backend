import Achievement from '../models/Achievement.js';

export const getAchievements = async (req, res) => {
  try {
    const achievements = await Achievement.find();
    console.log(`[GET /api/achievements] Success: Fetched ${achievements.length} achievements.`);
    res.json({ success: true, count: achievements.length, data: achievements, message: 'Achievements fetched successfully.' });
  } catch (error) {
    console.error(`[GET /api/achievements] Error:`, error);
    res.status(500).json({ success: false, error: 'Failed to fetch achievements', details: error.message });
  }
};

export const createAchievement = async (req, res) => {
  try {
    const achievement = new Achievement(req.body);
    await achievement.save();
    console.log(`[POST /api/achievements] Success: Achievement created with id ${achievement._id}`);
    res.status(201).json({ success: true, data: achievement, message: 'Achievement created successfully.' });
  } catch (error) {
    console.error(`[POST /api/achievements] Error:`, error);
    res.status(400).json({ success: false, error: 'Failed to create achievement', details: error.message });
  }
};
