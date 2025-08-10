import {
  Count,
  Filter,
  repository,
  Where
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  param,
  post,
  put,
  requestBody,
} from '@loopback/rest';
import {Skills} from '../models';
import {SkillsRepository} from '../repositories';

export class SkillsController {
  constructor(
    @repository(SkillsRepository)
    public skillsRepository: SkillsRepository,
  ) { }

  @post('/skills')
  async create(@requestBody({
    content: {
      'application/json': {
        schema: getModelSchemaRef(Skills, {
          title: 'NewSkills',
          exclude: ['id'],
        }),
      },
    },
  }) skills: Omit<Skills, 'id'>): Promise<Skills> {
    return this.skillsRepository.create(skills);
  }

  @get('/skills/count')
  async count(
    @param.where(Skills) where?: Where<Skills>,
  ): Promise<Count> {
    return this.skillsRepository.count(where);
  }

  @get('/skills')
  async find(
    @param.filter(Skills) filter?: Filter<Skills>,
  ): Promise<Skills[]> {
    return this.skillsRepository.find(filter);
  }

  @get('/skills/{id}')
  async findById(
    @param.path.number('id') id: number,
  ): Promise<Skills> {
    return this.skillsRepository.findById(id);
  }

  @put('/skills/{id}')
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Skills),
        },
      },
    })
    skills: Skills,
  ): Promise<void> {
    await this.skillsRepository.updateById(id, skills);
  }

  @del('/skills/{id}')
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.skillsRepository.deleteById(id);
  }
}
