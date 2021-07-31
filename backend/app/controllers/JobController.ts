import { Body, Delete, Get, HttpCode, JsonController, Param, Post, Patch, QueryParams } from 'routing-controllers';
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

  @Get('/:id')
  @HttpCode(200)
  public async getOne(@Param('id') id: string, @QueryParams() parseResourceOptions: RequestQueryParser) {
    const resourceOptions = parseResourceOptions.getAll();

    return await this.jobService.findOneById(id, resourceOptions);
  }

  @Post()
  @HttpCode(201)
  public async create(@Body() job: any) {
    console.log(job)
    return await this.jobService.create(job);
  }

  @Patch('/:id')
  @HttpCode(200)
  public async update(@Param('id') id: string, @Body() job: JobCreateRequest) {
    return await this.jobService.updateOneById(id, job);
  }

  @Delete('/:id')
  @HttpCode(204)
  public async delete(@Param('id') id: string) {
    return await this.jobService.deleteOneById(id);
  }
}
