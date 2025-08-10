import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {PortfolioDataSource} from '../datasources';
import {Footer, FooterRelations} from '../models';

export class FooterRepository extends DefaultCrudRepository<
  Footer,
  typeof Footer.prototype.id,
  FooterRelations
> {
  constructor(
    @inject('datasources.portfolio') dataSource: PortfolioDataSource,
  ) {
    super(Footer, dataSource);
  }
}
