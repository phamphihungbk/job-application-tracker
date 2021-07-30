import { Service } from 'typedi';
import { JobRepository } from '@base/src/repositories/JobRepository';
import { InjectRepository } from 'typeorm-typedi-extensions';
import { JobNotFoundException } from '@base/app/exception/JobNotFoundException';

@Service()
export class JobService {
  constructor(@InjectRepository() private jobRepository: JobRepository) {
    //
  }

  public async getAll(resourceOptions?: object) {
    return await this.jobRepository.getManyAndCount(resourceOptions);
  }

  public async findOneById(id: number, resourceOptions?: object) {
    return await this.getRequestedJobOrFail(id, resourceOptions);
  }

  public async create(data: object) {
    return await this.jobRepository.createJob(data);
  }

  public async updateOneById(id: number, data: object) {
    const job = await this.getRequestedJobOrFail(id);

    return await this.jobRepository.updateJob(job, data);
  }

  public async deleteOneById(id: number) {
    return await this.jobRepository.delete(id);
  }

  private async getRequestedJobOrFail(id: number, resourceOptions?: object) {
    let job = await this.jobRepository.getOneById(id, resourceOptions);

    if (!job) {
      throw new JobNotFoundException();
    }

    return job;
  }
}
