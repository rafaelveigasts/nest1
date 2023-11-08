import { IsString } from 'class-validator';
import { Tags } from '../entities/tags.entity';

export class CreateCourseDto {
  // @IsString()
  // id: string;
  @IsString()
  name: string;
  @IsString()
  description: string;

  @IsString({ each: true })
  tags: string[];
  // static tags: string[];
}

//ainda prefiro o zod pra fazer isso.
