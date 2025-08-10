import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: true}})
export class Skills extends Entity {
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
  email: string; // <-- 'name' ki jagah 'email'

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Skills>) {
    super(data);
  }
}

export interface SkillsRelations {
  // describe navigational properties here
}

export type SkillsWithRelations = Skills & SkillsRelations;
