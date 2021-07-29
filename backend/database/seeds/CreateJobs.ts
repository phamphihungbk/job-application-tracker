import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm/connection/Connection';
import { Job } from '@base/src/models/Job';

export default class CreateJobs implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await factory(Job)().createMany(5);
  }
}
