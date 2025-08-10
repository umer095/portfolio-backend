import {Entity, model, property} from '@loopback/repository';

@model()
export class Contacts extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  icon: string;

  @property({
    type: 'string',
    required: true,
  })
  title: string;

  @property({
    type: 'string',
    required: true,
  })
  number: string;

  constructor(data?: Partial<Contacts>) {
    super(data);
  }
}

export interface ContactsRelations { }

export type ContactsWithRelations = Contacts & ContactsRelations;
