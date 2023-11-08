import { Course } from './course.entity';
export declare class Tags {
    id: string;
    name: string;
    courses: Course[];
    created_at: Date;
    updated_At: Date;
    generatedId(): string;
}
