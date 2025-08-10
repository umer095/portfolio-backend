import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';

import {
  del,
  get,
  getModelSchemaRef,
  param,
  patch,
  post,
  put,
  requestBody,
  response,
} from '@loopback/rest';

import {About} from '../models';
import {AboutRepository} from '../repositories';

export class AboutController {
  constructor(
    @repository(AboutRepository)
    public aboutRepository: AboutRepository,
  ) { }

  // Create new About instance
  @post('/abouts')
  @response(200, {
    description: 'Create a new About model instance',
    content: {'application/json': {schema: getModelSchemaRef(About)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(About, {title: 'NewAbout', exclude: ['id']}),
        },
      },
    })
    about: Omit<About, 'id'>,
  ): Promise<About> {
    return this.aboutRepository.create(about);
  }

  // Get count of About instances matching a where filter
  @get('/abouts/count')
  @response(200, {
    description: 'Count of About model instances',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(About) where?: Where<About>,
  ): Promise<Count> {
    return this.aboutRepository.count(where);
  }

  // Get all About instances with optional filter
  @get('/abouts')
  @response(200, {
    description: 'Array of About model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(About, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(About) filter?: Filter<About>,
  ): Promise<About[]> {
    return this.aboutRepository.find(filter);
  }

  // Update multiple About instances matching a where filter
  @patch('/abouts')
  @response(200, {
    description: 'Number of About instances updated',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(About, {partial: true}),
        },
      },
    })
    about: About,
    @param.where(About) where?: Where<About>,
  ): Promise<Count> {
    return this.aboutRepository.updateAll(about, where);
  }

  // Find an About instance by ID with optional filter excluding where
  @get('/abouts/{id}')
  @response(200, {
    description: 'About model instance by ID',
    content: {
      'application/json': {
        schema: getModelSchemaRef(About, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(About, {exclude: 'where'}) filter?: FilterExcludingWhere<About>,
  ): Promise<About> {
    return this.aboutRepository.findById(id, filter);
  }

  // Update an About instance by ID (partial update)
  @patch('/abouts/{id}')
  @response(204, {
    description: 'About PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(About, {partial: true}),
        },
      },
    })
    about: About,
  ): Promise<void> {
    await this.aboutRepository.updateById(id, about);
  }

  // Replace an About instance by ID (full update)
  @put('/abouts/{id}')
  @response(204, {
    description: 'About PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() about: About,
  ): Promise<void> {
    await this.aboutRepository.replaceById(id, about);
  }

  // Delete an About instance by ID
  @del('/abouts/{id}')
  @response(204, {
    description: 'About DELETE success',
  })
  async deleteById(
    @param.path.number('id') id: number,
  ): Promise<void> {
    await this.aboutRepository.deleteById(id);
  }
}
