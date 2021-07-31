import { IsNotEmpty, IsString, MaxLength, IsBoolean } from 'class-validator';

export class JobCreateRequest {
  @MaxLength(20)
  @IsString()
  position: string;

  @MaxLength(20)
  @IsString()
  company: string;

  @MaxLength(20)
  @IsString()
  status: string;

  @MaxLength(10)
  @IsString()
  location: string;

  @MaxLength(10)
  @IsString()
  requirements: string;

  @IsBoolean()
  is_startup_company: boolean;
}
