class SimpleSchoolProject {
  constructor() {
    this.students = [];
  }

  addStudent(name: string): void {
    if (!this.students.includes(name)) {
      this.students.push(name);
      console.log(`Added student: ${name}`);
    } else {
      console.log(`${name} is already a student.`);
    }
  }

  removeStudent(name: string): void {
    const index = this.students.findIndex(student => student === name);
    if (index !== -1) {
      this.students.splice(index, 1);
      console.log(`Removed student: ${name}`);
    } else {
      console.log(`${name} not found in the list.`);
    }
  }

  findStudent(name: string): void {
    const index = this.students.findIndex(student => student === name);
    if (index !== -1) {
      console.log(`Found student: ${name}, student count: ${this.students.length}`);
    } else {
      console.log(`${name} not found in the list.`);
    }
  }

  getStudents(): string[] {
    return this.students;
  }

  updateStudent(name: string, newDetails: any): void {
    const index = this.students.findIndex(student => student === name);
    if (index !== -1) {
      this.students[index] = newDetails;
      console.log(`Updated student details for ${name}:`, JSON.stringify(newDetails));
    } else {
      console.log(`${name} not found in the list.`);
    }
  }

  deleteStudent(name: string): void {
    const index = this.students.findIndex(student => student === name);
    if (index !== -1) {
      this.students.splice(index, 1);
      console.log(`Deleted student: ${name}`);
    } else {
      console.log(`${name} not found in the list.`);
    }
  }

  studentsCount(): number {
    return this.students.length;
  }
}
