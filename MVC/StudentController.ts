import { Student } from "./Student";
import { StudentView } from "./StudentView";

/**
 * 步骤3
 * 创建控制器
 */
export class StudentController {
    private model: Student;
    private view: StudentView;

    constructor(model: Student, view: StudentView) {
        this.model = model;
        this.view = view;
    }

    public setStudentName(name: string) {
        this.model.name = name;
    }

    public getStudentName(): string {
        return this.model.name;
    }

    public setStudentRollNo(rollNo: string) {
        this.model.rollNo = rollNo;
    }

    public getStudentRollNo(): string {
        return this.model.rollNo;
    }

    public updateView() {
        this.view.printStudentDetails(this.model.name, this.model.rollNo);
    }
}