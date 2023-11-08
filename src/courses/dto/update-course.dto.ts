import { PartialType } from '@nestjs/mapped-types';
import { CreateCourseDto } from './create-course.dto';
import { IsString } from 'class-validator';
import { Tags } from '../entities/tags.entity';

export class UpdateCourseDto extends PartialType(CreateCourseDto) {
  @IsString({ each: true })
  tags: string[];
  // static tags: Tags[];
}
