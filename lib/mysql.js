'use strict';

const assert = require('assert');
const mysql = require('mysql2');
let count = 0;

module.exports = app => {
  app.addSingleton('mysql', createOneClient);
};

async function createOneClient(config, app) {
  assert(config.host && config.port && config.user && config.database,
    `[egg-mysql] 'host: ${config.host}', 'port: ${config.port}', 'user: ${config.user}', 'database: ${config.database}' are required on config`);
  app.coreLogger.info('[egg-mysql] connecting %s@%s:%s/%s',
    config.user, config.host, config.port, config.database);

  const pool = await mysql.createPool(config);
  app.beforeStart(async function () {
    const rows = yield pool.query('select now() as currentTime;');
    const index = count++;
    app.coreLogger.info(`[egg-mysql] instance[${index}] status OK, rds currentTime: ${rows[0].currentTime}`);
  });
  return pool;
}
