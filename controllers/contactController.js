import Message from '../models/Message.js';

export const handleContactForm = async (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    console.warn(`[POST /api/contact] Validation failed: Missing fields.`, req.body);
    return res.status(400).json({ success: false, error: 'All fields are required.', details: { name, email, message } });
  }
  try {
    const newMessage = new Message({ name, email, message });
    await newMessage.save();
    console.log(`[POST /api/contact] Success: Message saved with id ${newMessage._id}`);
    res.status(201).json({ success: true, message: 'Message sent successfully!', data: { id: newMessage._id } });
  } catch (error) {
    console.error(`[POST /api/contact] Error:`, error);
    res.status(500).json({ success: false, error: 'Failed to send message', details: error.message });
  }
};
