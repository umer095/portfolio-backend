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
import {Home} from '../models';
import {HomeRepository} from '../repositories';

export class HomeController {
  constructor(
    @repository(HomeRepository)
    public homeRepository: HomeRepository,
  ) { }

  @post('/homes')
  @response(200, {
    description: 'Home model instance',
    content: {'application/json': {schema: getModelSchemaRef(Home)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Home, {
            title: 'NewHome',
            exclude: ['id'],
          }),
        },
      },
    })
    home: Omit<Home, 'id'>,
  ): Promise<Home> {
    return this.homeRepository.create(home);
  }

  @get('/homes/count')
  @response(200, {
    description: 'Home model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Home) where?: Where<Home>,
  ): Promise<Count> {
    return this.homeRepository.count(where);
  }

  @get('/homes')
  @response(200, {
    description: 'Array of Home model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Home, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Home) filter?: Filter<Home>,
  ): Promise<Home[]> {
    return this.homeRepository.find(filter);
  }

  @patch('/homes')
  @response(200, {
    description: 'Home PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Home, {partial: true}),
        },
      },
    })
    home: Home,
    @param.where(Home) where?: Where<Home>,
  ): Promise<Count> {
    return this.homeRepository.updateAll(home, where);
  }

  @get('/homes/{id}')
  @response(200, {
    description: 'Home model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Home, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Home, {exclude: 'where'}) filter?: FilterExcludingWhere<Home>
  ): Promise<Home> {
    return this.homeRepository.findById(id, filter);
  }

  @patch('/homes/{id}')
  @response(204, {
    description: 'Home PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Home, {partial: true}),
        },
      },
    })
    home: Home,
  ): Promise<void> {
    await this.homeRepository.updateById(id, home);
  }

  @put('/homes/{id}')
  @response(204, {
    description: 'Home PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() home: Home,
  ): Promise<void> {
    await this.homeRepository.replaceById(id, home);
  }

  @del('/homes/{id}')
  @response(204, {
    description: 'Home DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.homeRepository.deleteById(id);
  }
}
