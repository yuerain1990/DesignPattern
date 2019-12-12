/**
 * 步骤1
 * 创建模型
 */
export class Student {
    // 定义name rollNo
    private _name: string = "";
    public get name(): string {
        return this._name;
    }
    public set name(v: string) {
        this._name = v;
    }

    private _rollNo: string = "";
    public get rollNo(): string {
        return this._rollNo;
    }
    public set rollNo(v: string) {
        this._rollNo = v;
    }
}