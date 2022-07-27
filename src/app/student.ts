export class Student {
    public id: number;
    public studentname: string;
    public course: string;
   
    constructor(id:number, studentname:string, course:string) {
      this.id = id;
      this.studentname = studentname;
      this.course = course;
    }
}
