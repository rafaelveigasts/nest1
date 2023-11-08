import { Course } from './entities/course.entity';
import { UpdateCourseDto } from './dto/update-course.dto';
import { CreateCourseDto } from './dto/create-course.dto';
export declare class CoursesService {
    private readonly courseRepository;
    private readonly tagsRepository;
    private preLoadTagByName;
    create(createCourseDto: CreateCourseDto): Promise<Course>;
    findAll(): Promise<Course[]>;
    findOne(id: string): Promise<void>;
    update(id: string, updateCourseDTO: UpdateCourseDto): Promise<Course>;
    remove(id: string): Promise<Course>;
}
