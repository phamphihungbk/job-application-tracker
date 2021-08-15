import { IsString, MaxLength, IsBoolean } from 'class-validator';

export class JobCreateRequest {
  @MaxLength(20, { message: 'Position is too long' })
  @IsString()
  position: string;

  @MaxLength(20, { message: 'Company name is too long' })
  @IsString()
  company: string;

  @MaxLength(20, { message: 'Status is too long' })
  @IsString()
  status: string;

  @MaxLength(20, { message: 'Location is too long' })
  @IsString()
  location: string;

  @MaxLength(20, { message: 'Requirements are too long' })
  @IsString()
  requirements: string;

  @IsBoolean({ message: 'Value should be boolean' })
  is_startup_company: boolean;
}
