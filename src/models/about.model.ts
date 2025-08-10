import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: true}})
export class About extends Entity {
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
  subtitle: string;

  @property({
    type: 'string',
    required: true,
  })
  description: string;

  @property({
    type: 'string',
    required: true,
  })
  image: string;

  @property({
    type: 'string',
    required: false, // Resume link is optional
  })
  resume?: string; // Can store a URL or file path

  [prop: string]: any;

  constructor(data?: Partial<About>) {
    super(data);
  }
}

export interface AboutRelations {
  // Add navigational properties here if needed
}

export type AboutWithRelations = About & AboutRelations;
