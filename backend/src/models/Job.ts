import { Column, Entity, PrimaryGeneratedColumn, BeforeInsert } from 'typeorm';
import { BaseModel } from '@base/src/abstracts/BaseModel';
import { v4 as uuidv4 } from 'uuid';
import { Exclude } from "class-transformer";

@Entity({ name: 'jobs' })
export class Job extends BaseModel {
  @PrimaryGeneratedColumn('uuid')
  id: string;

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

  @BeforeInsert()
  async addId() {
    this.id = uuidv4();
  }
}
