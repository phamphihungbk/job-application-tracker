import { Job } from '@base/src/models/Job';
import { EntityRepository } from 'typeorm';
import { RepositoryBase } from '@base/src/abstracts/RepositoryBase';

@EntityRepository(Job)
export class JobRepository extends RepositoryBase<Job> {
  public async createJob(data: object) {
    let entity = new Job();

    Object.assign(entity, data);

    return await this.save(entity);
  }

  public async updateJob(job: Job, data: object) {
    Object.assign(job, data);

    return await job.save(data);
  }
}
