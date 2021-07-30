import { IsNotEmpty, IsString, MinLength, MaxLength, IsBoolean } from 'class-validator';

export class JobCreateRequest {
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

  @MaxLength(8)
  @MinLength(0)
  @IsString()
  location: string;

  @MaxLength(8)
  @MinLength(0)
  @IsString()
  requirements: string;

  @MaxLength(8)
  @MinLength(0)
  @IsBoolean()
  is_startup_company: string;
}
