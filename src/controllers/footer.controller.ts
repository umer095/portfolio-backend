import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Footer} from '../models';
import {FooterRepository} from '../repositories';

export class FooterController {
  constructor(
    @repository(FooterRepository)
    public footerRepository : FooterRepository,
  ) {}

  @post('/footers')
  @response(200, {
    description: 'Footer model instance',
    content: {'application/json': {schema: getModelSchemaRef(Footer)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Footer, {
            title: 'NewFooter',
            exclude: ['id'],
          }),
        },
      },
    })
    footer: Omit<Footer, 'id'>,
  ): Promise<Footer> {
    return this.footerRepository.create(footer);
  }

  @get('/footers/count')
  @response(200, {
    description: 'Footer model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Footer) where?: Where<Footer>,
  ): Promise<Count> {
    return this.footerRepository.count(where);
  }

  @get('/footers')
  @response(200, {
    description: 'Array of Footer model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Footer, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Footer) filter?: Filter<Footer>,
  ): Promise<Footer[]> {
    return this.footerRepository.find(filter);
  }

  @patch('/footers')
  @response(200, {
    description: 'Footer PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Footer, {partial: true}),
        },
      },
    })
    footer: Footer,
    @param.where(Footer) where?: Where<Footer>,
  ): Promise<Count> {
    return this.footerRepository.updateAll(footer, where);
  }

  @get('/footers/{id}')
  @response(200, {
    description: 'Footer model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Footer, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Footer, {exclude: 'where'}) filter?: FilterExcludingWhere<Footer>
  ): Promise<Footer> {
    return this.footerRepository.findById(id, filter);
  }

  @patch('/footers/{id}')
  @response(204, {
    description: 'Footer PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Footer, {partial: true}),
        },
      },
    })
    footer: Footer,
  ): Promise<void> {
    await this.footerRepository.updateById(id, footer);
  }

  @put('/footers/{id}')
  @response(204, {
    description: 'Footer PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() footer: Footer,
  ): Promise<void> {
    await this.footerRepository.replaceById(id, footer);
  }

  @del('/footers/{id}')
  @response(204, {
    description: 'Footer DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.footerRepository.deleteById(id);
  }
}
