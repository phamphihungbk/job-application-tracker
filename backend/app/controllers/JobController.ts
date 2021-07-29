import { Param, Get, JsonController, Post, Body, Put, Delete, HttpCode, QueryParams } from 'routing-controllers';
import { JobRepository } from '@base/src/repositories/JobRepository';
import { Service } from 'typedi';
import { ControllerBase } from '@base/src/abstracts/ControllerBase'
import { RequestQueryParser } from 'typeorm-simple-query-parser';
import { JobCreateRequest } from '@base/src/requests/JobCreateRequest';

@Service()
@JsonController('/jobs')
export class JobController extends ControllerBase {
  public constructor(private jobRepository: JobRepository) {
    super();
  }

  @Get()
  public async getAll(@QueryParams() parseResourceOptions: RequestQueryParser) {
    const resourceOptions = parseResourceOptions.getAll();

    return await this.jobRepository.getAll(resourceOptions);
  }

  @Get('/:id([0-9]+)')
  public async getOne(@Param('id') id: number, @QueryParams() parseResourceOptions: RequestQueryParser) {
    const resourceOptions = parseResourceOptions.getAll();

    return await this.jobRepository.findOneById(id, resourceOptions);
  }

  @Post()
  @HttpCode(201)
  public async create(@Body() job: JobCreateRequest) {
    return await this.jobRepository.create(job);
  }

  @Put('/:id')
  public async update(@Param('id') id: number, @Body() job: JobCreateRequest) {
    return await this.jobRepository.updateOneById(id, job);
  }

  @Delete('/:id')
  @HttpCode(204)
  public async delete(@Param('id') id: number) {
    return await this.jobRepository.deleteOneById(id);
  }
}
