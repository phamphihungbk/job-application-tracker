import { IsNotEmpty, IsString, MaxLength, IsBoolean } from 'class-validator';

export class JobCreateRequest {
  @MaxLength(20, { message: 'Title is too long' })
  @IsString()
  position: string;

  @MaxLength(20, { message: 'Title is too long' })
  @IsString()
  company: string;

  @MaxLength(20, { message: 'Title is too long' })
  @IsString()
  status: string;

  @MaxLength(10, { message: 'Title is too long' })
  @IsString()
  location: string;

  @MaxLength(10, { message: 'Title is too long' })
  @IsString()
  requirements: string;

  @IsBoolean()
  is_startup_company: boolean;
}
