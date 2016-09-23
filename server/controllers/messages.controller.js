import { Message } from '../models';
import { sendError } from '../util';

const messagesController = {};

messagesController.get = async (req, res) => {
  try {
    const messages = await Message.findAll();
    res.json({
      success: true,
      results: messages.map(message => message.toJSON())
    });
  } catch (e) {
    sendError({ res, message: `error getting messages from database. error = ${e}`});
  }
};

messagesController.post = async (req, res) => {
  const { user, content } = req.body;
  try {
    await Message.create({
      user,
      content
    });
    res.json({
      success: true
    });
  } catch (e) {
    res.json({
      success: false,
      msg: `error creating message in database. error = ${e}`
    });
  }
}

export default messagesController;