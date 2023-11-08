import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Course } from './entities/course.entity';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Tags } from './entities/tags.entity';
import { CreateCourseDto } from './dto/create-course.dto';

@Injectable()
export class CoursesService {
  @InjectRepository(Course)
  private readonly courseRepository: Repository<Course>;

  @InjectRepository(Tags)
  private readonly tagsRepository: Repository<Tags>;

  private async preLoadTagByName(name: string): Promise<Tags> {
    const tag = await this.tagsRepository.findOne({
      where: { name },
      relations: ['courses'],
    });

    if (tag) {
      return tag;
    }

    return this.tagsRepository.create({ name });
  }

  async create(createCourseDto: CreateCourseDto) {
    const tags = await Promise.all(
      createCourseDto.tags.map(
        async (tag) => await this.preLoadTagByName(String(tag)),
      ),
    );

    const course = this.courseRepository.create({
      ...createCourseDto,
      tags: tags.map((tag) => tag.name),
    });

    return this.courseRepository.save(course);
  }

  async findAll() {
    return this.courseRepository.find({
      relations: ['tags'],
    });
  }

  async findOne(id: string) {
    const course = await this.courseRepository.findOne({
      where: { id },
      relations: ['tags'],
    });

    if (!course) {
      throw new NotFoundException({
        message: 'Curso não encontrado',
        id,
        cause: 'Não existe curso com o id informado',
      });
    }
  }

  async update(id: string, updateCourseDTO: UpdateCourseDto) {
    const tags =
      updateCourseDTO.tags &&
      (await Promise.all(
        updateCourseDTO.tags.map((tag) => this.preLoadTagByName(tag)),
      ));

    const course = await this.courseRepository.preload({
      ...updateCourseDTO,
      id,
      tags: tags.map((tag) => tag.name),
    });

    if (!course) {
      throw new NotFoundException({
        message: 'Curso não encontrado',
        id,
        cause: 'Não existe curso com o id informado',
      });
    }

    return this.courseRepository.save(course);
  }

  async remove(id: string) {
    const _course = await this.courseRepository.findOne({
      where: { id },
      relations: ['tags'],
    });

    if (!_course) {
      throw new NotFoundException({
        message: 'Curso não encontrado',
        id,
        cause: 'Não existe curso com o id informado',
      });
    }

    return this.courseRepository.remove(_course);
  }
}
