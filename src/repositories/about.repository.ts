import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {PortfolioDataSource} from '../datasources';
import {About, AboutRelations} from '../models';

export class AboutRepository extends DefaultCrudRepository<
  About,
  typeof About.prototype.id,
  AboutRelations
> {
  constructor(
    @inject('datasources.portfolio') dataSource: PortfolioDataSource,
  ) {
    super(About, dataSource);
  }
}
