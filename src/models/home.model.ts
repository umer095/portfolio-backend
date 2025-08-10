import {Entity, model, property} from '@loopback/repository';

@model()
export class Home extends Entity {
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
  text: string;

  @property({
    type: 'string',
    required: true,
  })
  backend_image: string;

  constructor(data?: Partial<Home>) {
    super(data);
  }
}

export interface HomeRelations {
  // future relation properties
}

export type HomeWithRelations = Home & HomeRelations;
