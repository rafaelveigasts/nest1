import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
export declare class CoursesController {
    private readonly couseService;
    create(createCourseDto: CreateCourseDto): Promise<import("./entities/course.entity").Course>;
    findAll(): Promise<import("./entities/course.entity").Course[]>;
    findOne(id: string): Promise<void>;
    replace(id: string, updateCourseDto: UpdateCourseDto): Promise<import("./entities/course.entity").Course>;
    remove(id: string): Promise<import("./entities/course.entity").Course>;
}
