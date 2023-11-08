import { randomUUID } from 'node:crypto';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { mock } from 'node:test';
import { UpdateCourseDto } from './dto/update-course.dto';

describe('CoursesService', () => {
  let service: CoursesService;

  let id: string;
  let created_at: Date;
  let expectOutputTags: any;
  let expectOutputCourse: any;
  let mockCourseRepository: any;
  let mockTagsRepository: any;

  beforeEach(async () => {
    service = new CoursesService();
    id = randomUUID();
    created_at = new Date();
    expectOutputTags = [
      {
        id: randomUUID(),
        name: 'nodejs',
        created_at,
        updated_at: created_at,
      },
    ];

    expectOutputCourse = {
      id,
      name: 'test',
      description: 'test description',
      created_at,
      tags: expectOutputTags,
    };

    mockCourseRepository = {
      create: jest.fn().mockReturnValue(Promise.resolve(expectOutputCourse)),
      save: jest.fn().mockReturnValue(Promise.resolve(expectOutputCourse)),
      update: jest.fn().mockReturnValue(Promise.resolve(expectOutputCourse)),
      preload: jest.fn().mockReturnValue(Promise.resolve(expectOutputCourse)),
      find: jest.fn().mockReturnValue(Promise.all([expectOutputCourse])),
      findOne: jest.fn().mockReturnValue(Promise.resolve(expectOutputCourse)),
      remove: jest.fn().mockReturnValue(Promise.resolve(expectOutputCourse)),
    };

    mockTagsRepository = {
      findOne: jest.fn().mockReturnValue(Promise.resolve(expectOutputTags)),
      create: jest.fn().mockReturnValue(Promise.resolve(expectOutputTags)),
    };
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should be to create a course', async () => {
    //@ts-expect-error - defined part of method
    service['courseRepository'] = mockCourseRepository;
    //@ts-expect-error - defined part of method
    service['tagsRepository'] = mockTagsRepository;

    const createCourseDto: CreateCourseDto = {
      name: 'test',
      description: 'test description',
      tags: ['nodejs'],
    };

    const result = await service.create(createCourseDto);

    expect(mockCourseRepository.create).toBeCalled();
    expect(mockCourseRepository.save).toBeCalled();
    expect(expectOutputCourse).toStrictEqual(result);

    expect(result).toEqual(expectOutputCourse);
  });

  it('should be able to list a course', async () => {
    //@ts-expect-error - defined part of method
    service['courseRepository'] = mockCourseRepository;
    //@ts-expect-error - defined part of method
    service['tagsRepository'] = mockTagsRepository;

    const courses = await service.findAll();

    expect(mockCourseRepository.find).toBeCalled();
    expect(courses).toEqual([expectOutputCourse]);
  });

  it('should be able to list one course', async () => {
    //@ts-expect-error - defined part of method
    service['courseRepository'] = mockCourseRepository;
    //@ts-expect-error - defined part of method
    service['tagsRepository'] = mockTagsRepository;

    const course = await service.findOne(id);

    expect(mockCourseRepository.findOne).toHaveBeenCalled();
    // expect(course).toEqual(expectOutputCourse);
  });

  it('should be able to update a course', async () => {
    //@ts-expect-error - defined part of method
    service['courseRepository'] = mockCourseRepository;
    //@ts-expect-error - defined part of method
    service['tagsRepository'] = mockTagsRepository;

    const updateCourseDto: UpdateCourseDto = {
      name: 'test',
      description: 'test description',
      tags: ['nodejs'],
    };

    const result = await service.update(id, updateCourseDto);

    expect(mockCourseRepository.save).toHaveBeenCalled();
    expect(mockCourseRepository.preload).toHaveBeenCalled();
    expect(result).toEqual(expectOutputCourse);
  });

  it('should be able to remove a course', async () => {
    //@ts-expect-error - defined part of method
    service['courseRepository'] = mockCourseRepository;
    //@ts-expect-error - defined part of method
    service['tagsRepository'] = mockTagsRepository;

    await service.remove(id);

    expect(mockCourseRepository.findOne).toHaveBeenCalled();
    expect(mockCourseRepository.remove).toHaveBeenCalled();
  });
});
