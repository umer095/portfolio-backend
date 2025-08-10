import {Entity, model, property} from '@loopback/repository';

@model()
export class Education extends Entity {
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
  description: string;

  constructor(data?: Partial<Education>) {
    super(data);
  }
}

export interface EducationRelations {
  // अगर कोई relation है तो यहां बताओ, नहीं तो खाली छोड़ो
}

export type EducationWithRelations = Education & EducationRelations;
