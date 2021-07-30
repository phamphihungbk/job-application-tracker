import { NotFoundError } from 'routing-controllers';

export class JobNotFoundException extends NotFoundError {
  constructor() {
    super('Job not found!');
  }
}
