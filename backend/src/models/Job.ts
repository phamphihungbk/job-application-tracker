import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { BaseModel } from '@base/src/abstracts/BaseModel';

@Entity({ name: 'jobs' })
export class Job extends BaseModel {
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
