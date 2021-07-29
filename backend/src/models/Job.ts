import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { AbstractModel } from '@base/src/abstracts/AbstractModel';

@Entity({ name: 'jobs' })
export class Job extends AbstractModel {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  position: string;

  @Column()
  company: string;

  @Column()
  status: string;

  @Column()
  location: string;

  @Column()
  requirements: string;

  @Column()
  is_startup_company: boolean;
}
