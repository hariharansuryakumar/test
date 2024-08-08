import { formatDate } from "./utils";
export class TaskManager {
    constructor() {
        this.task = [];
    }


    addTask(Describtion, completed = false) {
        const task={
            Describtion,
            date: formatDate(new Date()),
            completed:
        };
        this.task.push(task);
    }
}