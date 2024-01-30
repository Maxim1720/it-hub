import { TaskData } from "./Task";

export type Project = {
    name: string,
    description: string,
    tasks: TaskData[],
};