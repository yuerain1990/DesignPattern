/**
 * 步骤2
 * 创建视图
 */
export class StudentView {
    public printStudentDetails(studentName: string, studentRollNo: string) {
        console.log("Student:");
        console.log("Name:" + studentName);
        console.log("Roll No:" + studentRollNo);
    }
}