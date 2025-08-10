import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'portfolio',
  connector: 'mysql',
  host: process.env.MYSQLHOST,
  port: +(process.env.MYSQLPORT || 3306),
  user: process.env.MYSQLUSER,
  password: process.env.MYSQLPASSWORD,
  database: process.env.MYSQLDATABASE,
  url: process.env.MYSQL_URL || '',
};

@lifeCycleObserver('datasource')
export class PortfolioDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'portfolio';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.portfolio', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}

