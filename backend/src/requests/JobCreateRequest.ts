import { IsNotEmpty, IsString, MaxLength, IsBoolean } from 'class-validator';

export class JobCreateRequest {
  @MaxLength(20)
  @IsString()
  @IsNotEmpty()
  position: string;

  @MaxLength(20)
  @IsString()
  @IsNotEmpty()
  company: string;

  @MaxLength(8)
  @IsString()
  @IsNotEmpty()
  status: string;

  @MaxLength(8)
  @IsString()
  location: string;

  @MaxLength(8)
  @IsString()
  requirements: string;

  @IsBoolean()
  is_startup_company: boolean;
}
