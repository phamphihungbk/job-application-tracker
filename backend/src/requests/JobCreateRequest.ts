import { IsNotEmpty, IsString, MinLength, MaxLength } from 'class-validator';

export class JobCreateRequest {
  @MaxLength(20)
  @MinLength(2)
  @IsString()
  @IsNotEmpty()
  jobs: string;

  @MaxLength(20)
  @MinLength(2)
  @IsString()
  @IsNotEmpty()
  position: string;

  @MaxLength(20)
  @MinLength(2)
  @IsString()
  @IsNotEmpty()
  company: string;

  @MaxLength(8)
  @MinLength(0)
  @IsString()
  @IsNotEmpty()
  status: string;
}
