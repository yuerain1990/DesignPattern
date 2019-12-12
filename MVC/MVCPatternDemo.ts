import { Student } from "./Student";
import { StudentView } from "./StudentView";
import { StudentController } from "./StudentController";

/**
 * 步骤4
 * MVC使用
 */
class MVCPatternDemo {
    public static main() {
        // 从数据库获取学生记录
        let model: Student = this.retrieveStudentFromDatabase();

        // 创建一个视图，把学生详细信息输出到控制台
        let view: StudentView = new StudentView();

        let controller: StudentController = new StudentController(model, view);
        controller.updateView();

        // 更新模型数据
        controller.setStudentName("lisi");
        controller.updateView();
    }

    private static retrieveStudentFromDatabase(): Student {
        let model: Student = new Student();
        model.name = "zhangsan";
        model.rollNo = "000001";
        return model;
    }
}

// 执行程序
MVCPatternDemo.main();