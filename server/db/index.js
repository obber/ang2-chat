import Sequelize from 'sequelize';
import cfg from './config';

const sequelize = new Sequelize(cfg.database, cfg.username, cfg.password, {
  dialect: 'sqlite',
  storage: 'server/db/database.sqlite'
});

const Message = sequelize.define('Message', {
  content: Sequelize.STRING
});

export { 
  sequelize 
};