// import statements
import { Student } from "./Student.ts";

class School {
    private students: Student[] = [];

    addStudent(student: Student) {
        this.students.push(student);
    }

    removeStudent(studentId: number) {
        const index = this.students.findIndex((student) => student.id === studentId);
        if (index !== -1) {
            this.students.splice(index, 1);
        }
    }

    getStudents(): Student[] {
        return this.students;
    }

    findStudentById(id: number): Student | undefined {
        const index = this.students.findIndex((student) => student.id === id);
        if (index !== -1) {
            return this.students[index];
        } else {
            return undefined;
        }
    }

    updateStudent(studentId: number, updatedData: Partial<Student>): void {
        const index = this.students.findIndex((student) => student.id === studentId);
        if (index !== -1) {
            Object.assign(this.students[index], updatedData);
        }
    }
}
