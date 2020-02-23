# egg-mysql2

[![NPM version][npm-image]][npm-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-mysql2.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-mysql2
[david-image]: https://img.shields.io/david/cuyl/egg-mysql2.svg?style=flat-square
[david-url]: https://david-dm.org/cuyl/egg-mysql2
[snyk-image]: https://snyk.io/test/npm/egg-mysql2/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-mysql2
[download-image]: https://img.shields.io/npm/dm/egg-mysql2.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-mysql2

## Install

```bash
$ npm i egg-mysql2 --save
```

## Usage

### enable plugin

```js
// {app_root}/config/plugin.js
exports.mysql = {
  enable: true,
  package: 'egg-mysql2',
};
```

### Configuration

* Simple database instance

```
exports.mysql = {
  // database configuration
  client: {
    // host
    host: 'mysql.com',
    // port
    port: '3306',
    // username
    user: 'test_user',
    // password
    password: 'test_password',
    // database
    database: 'test',    
  },
  // load into app, default is open
  app: true,
  // load into agent, default is close
  agent: false,
};
```
Usage:
```
app.mysql.query(sql, values); // you can access to simple database instance by using app.mysql.
```

* Multiple database instance

```
exports.mysql = {
  clients: {
    // clientId, access the client instance by app.mysql.get('clientId')
    db1: {
      // host
      host: 'mysql.com',
      // port
      port: '3306',
      // username
      user: 'test_user',
      // password
      password: 'test_password',
      // database
      database: 'test',
    },
    // ...
  },
  // default configuration for all databases
  default: {

  },

  // load into app, default is open
  app: true,
  // load into agent, default is close
  agent: false,
};

```
Usage:
```
const client1 = app.mysql.get('db1');
client1.query(sql, values);

const client2 = app.mysql.get('db2');
client2.query(sql, values);
```

## License

[MIT](LICENSE)
