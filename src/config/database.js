import { Sequelize } from 'sequelize';
import env from './env.js';

console.log("DB_HOST:", env.DB_HOST);
console.log("DB_USER:", env.DB_USER);
console.log("DB_NAME:", env.DB_NAME);

const sequelize = new Sequelize(
  env.DB_NAME,
  env.DB_USER,
  env.DB_PASSWORD,
  {
    host: env.DB_HOST,
    dialect: env.DB_DIALECT,
    logging: false
  }
);

export default sequelize;