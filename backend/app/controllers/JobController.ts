import { Body, Delete, Get, HttpCode, JsonController, Param, Post, QueryParams, Put } from 'routing-controllers';
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
    let data = await this.jobService.getAll(resourceOptions)

    return JobController.respondWithCustomData(200, 'successfully found', data);
  }

  @Get('/:id')
  @HttpCode(200)
  public async getOne(@Param('id') id: string, @QueryParams() parseResourceOptions: RequestQueryParser) {
    const resourceOptions = parseResourceOptions.getAll();
    let data = await this.jobService.findOneById(id, resourceOptions)

    return await JobController.respondWithCustomData(200, 'Successfully found', data);
  }

  @Post()
  @HttpCode(201)
  public async create(@Body() job: JobCreateRequest) {
    await this.jobService.create(job)

    return JobController.respondWithCustomData(201, 'Successfully created');
  }

  @Put('/:id')
  @HttpCode(200)
  public async update(@Param('id') id: string, @Body() job: JobCreateRequest) {
    await this.jobService.updateOneById(id, job);

    return JobController.respondWithCustomData(200, 'Successfully updated');
  }

  @Delete('/:id')
  @HttpCode(200)
  public async delete(@Param('id') id: string) {
    await this.jobService.deleteOneById(id);

    return JobController.respondWithCustomData(200, 'Successfully deleted');
  }

  private static respondWithCustomData(statusCode: number, message: string, data?: object) {
    return {
      data: data,
      code: statusCode,
      message: message
    }
  }
}
