'use strict';

module.exports = {
  env: 'development',
  get db(){ return  'mongodb://localhost:27018/store' },
  port: process.env.PORT || 9090,
  database: "store",
  secret: "highlysecret"
};