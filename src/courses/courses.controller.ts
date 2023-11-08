import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  HttpCode,
  Put,
  HttpStatus,
  Inject,
} from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { CoursesService } from './courses.service';

@Controller('courses')
export class CoursesController {
  @Inject(CoursesService)
  private readonly couseService: CoursesService;

  @Post()
  create(@Body() createCourseDto: CreateCourseDto) {
    return this.couseService.create(createCourseDto);
  }

  @Get()
  findAll() {
    return this.couseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.couseService.findOne(id);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Put(':id')
  replace(@Param('id') id: string, @Body() updateCourseDto: UpdateCourseDto) {
    return this.couseService.update(id, updateCourseDto);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.couseService.remove(id);
  }
}
