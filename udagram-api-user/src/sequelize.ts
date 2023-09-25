import {Sequelize} from 'sequelize-typescript';
import {config} from './config/config';


export const sequelize = new Sequelize({
  'username': config.username,
  'password': config.password,
  'database': config.database,
  'host': config.host,
  'port': 5432,
  'dialect': config.dialect as config.dialect,
  'storage': ':memory:',
  'dialectOptions': {
      'ssl': {
        'require': true,
        'rejectUnauthorized': false
        }
    },
  'ssl': true
});
