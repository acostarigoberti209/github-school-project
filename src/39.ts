// Define your module name here
const moduleName = 'simpleSchoolProject';

function addNumbers(x: number, y: number): number {
    return x + y;
}

class Student {
    private _name: string;

    constructor(name: string) {
        this._name = name;
    }

    get name(): string {
        return this._name;
    }
}

interface Teacher {
    id: number;
    name: string;
}

const teacher1: Teacher = {id: 1, name: 'Teacher1'};
