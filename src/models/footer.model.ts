import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: true}})
export class Footer extends Entity {
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
  title: string;

  @property({
    type: 'string',
    required: true,
  })
  text: string;

  @property({
    type: 'string',
    required: true,
  })
  decription: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Footer>) {
    super(data);
  }
}

export interface FooterRelations {
  // describe navigational properties here
}

export type FooterWithRelations = Footer & FooterRelations;
