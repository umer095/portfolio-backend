import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {PortfolioDataSource} from '../datasources';
import {Education, EducationRelations} from '../models';

export class EducationRepository extends DefaultCrudRepository<
  Education,
  typeof Education.prototype.id,
  EducationRelations
> {
  constructor(
    @inject('datasources.portfolio') dataSource: PortfolioDataSource,
  ) {
    super(Education, dataSource);
  }
}
