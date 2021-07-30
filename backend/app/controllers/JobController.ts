import { Body, Delete, Get, HttpCode, JsonController, Param, Post, Put, QueryParams } from 'routing-controllers';
import { Service } from 'typedi';
import { ControllerBase } from '@base/src/abstracts/ControllerBase';
import { RequestQueryParser } from 'typeorm-simple-query-parser';
import { JobCreateRequest } from '@base/src/requests/JobCreateRequest';
import { JobService } from '@base/src/services/JobService';

@Service()
@JsonController('/jobs')
export class JobController extends ControllerBase {
  public constructor(private jobService: JobService) {
    super();
  }

  @Get()
  @HttpCode(200)
  public async getAll(@QueryParams() parseResourceOptions: RequestQueryParser) {
    const resourceOptions = parseResourceOptions.getAll();

    return await this.jobService.getAll(resourceOptions);
  }

  @Get('/:id([0-9]+)')
  @HttpCode(200)
  public async getOne(@Param('id') id: number, @QueryParams() parseResourceOptions: RequestQueryParser) {
    const resourceOptions = parseResourceOptions.getAll();

    return await this.jobService.findOneById(id, resourceOptions);
  }

  @Post()
  @HttpCode(201)
  public async create(@Body() job: JobCreateRequest) {
    return await this.jobService.create(job);
  }

  @Put('/:id')
  @HttpCode(200)
  public async update(@Param('id') id: number, @Body() job: JobCreateRequest) {
    return await this.jobService.updateOneById(id, job);
  }

  @Delete('/:id')
  @HttpCode(204)
  public async delete(@Param('id') id: number) {
    return await this.jobService.deleteOneById(id);
  }
}
