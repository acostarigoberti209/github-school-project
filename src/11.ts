export class School {
  public students: string[] = [];

  public addStudent(studentName: string): void {
    this.students.push(studentName);
  }

  public getStudents(): string[] {
    return this.students;
  }
}
