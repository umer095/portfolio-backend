import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {PortfolioDataSource} from '../datasources';
import {Skills, SkillsRelations} from '../models';

export class SkillsRepository extends DefaultCrudRepository<
  Skills,
  typeof Skills.prototype.id,
  SkillsRelations
> {
  constructor(
    @inject('datasources.portfolio') dataSource: PortfolioDataSource,
  ) {
    super(Skills, dataSource);
  }
}
