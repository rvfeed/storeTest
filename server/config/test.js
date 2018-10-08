'use strict';

module.exports = {
  env: 'test',
    get db(){ return  'mongodb://localhost:27018/store' },
  port: process.env.PORT || 9091,
  database: "store"
};