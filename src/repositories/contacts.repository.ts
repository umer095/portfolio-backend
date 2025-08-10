import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {PortfolioDataSource} from '../datasources';
import {Contacts, ContactsRelations} from '../models';

export class ContactsRepository extends DefaultCrudRepository<
  Contacts,
  typeof Contacts.prototype.id,
  ContactsRelations
> {
  constructor(
    @inject('datasources.portfolio') dataSource: PortfolioDataSource,
  ) {
    super(Contacts, dataSource);
  }
}
