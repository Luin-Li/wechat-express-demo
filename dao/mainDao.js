const mysql = require('mysql');
const $mysqlConf = require('../conf/config.mysql.js');

 
// 使用连接池，提升性能
const pool  = mysql.createPool($mysqlConf);

module.exports = pool;