import { defineStore } from "pinia"
import { TaskData } from "../definition/Task";

export const useTaskStore = defineStore("taskStore", {
    state: (): { all: TaskData[] } => ({
        all: []
    }),
    actions: {
        deleteTask(id: number) {
            this.all = this.all.filter(t => t.id !== id);
        },
        doneTask(id: number) {
            const index = this.all.findIndex(t => t.id === id);
            this.all[index].done = !this.all[index].done;
        },
        addTask(task: TaskData) {
            this.all.unshift(task);
        }
    },
    getters: {
        doneTasks(): TaskData[] {
            return this.all.filter(t => t.done);
        },
        undoneTasks(): TaskData[] {
            return this.all.filter(t => !t.done);
        }
    }
});