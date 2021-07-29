import Faker from 'faker';
import { define } from 'typeorm-seeding';
import { Job } from '@base/src/models/Job';

define(Job, (faker: typeof Faker) => {
  const company = faker.company.companyName();

  const job = new Job();
  job.position = 'Backend Engineer';
  job.company = company;
  job.status = 'Waiting';
  job.location = 'Singapore';
  job.requirements = 'PHP, Terraform';
  job.is_startup_company = false;

  return job;
});
