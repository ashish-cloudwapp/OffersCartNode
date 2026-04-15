import Sequelize from 'sequelize';
import sequelize from '../config/database.js';

import UserModel from './user.model.js';


const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = UserModel(sequelize, Sequelize.DataTypes);

export default db;
