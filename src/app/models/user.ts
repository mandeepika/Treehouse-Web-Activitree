export interface User {
    name: string;
    id: string;
    highSchool?: string;
    grade?: number;
    subjects?: string[];
    interests?: string[];
    todos?: string[];
}
