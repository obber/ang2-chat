import Sequelize from 'sequelize';
import { db } from '../db';

const Message = db.define('Message', {
  user: Sequelize.STRING,
  content: Sequelize.STRING
});

export default Message;