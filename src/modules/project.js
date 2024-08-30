import {editable} from "./manageTasks.js";
import { createTask } from "./todo.js";

export function createProject(title,description,dueDate,urgent,notes,id){
    const state = {
        title,
        description,
        dueDate,
        urgent,
        notes,
        id,
        complete : false,
        tasks : [],
    }

    //add tasks in project
    const addTask = (title,description,dueDate,urgent,notes,id) => {
        const task = createTask(title,description,dueDate,urgent,notes,id);
        task.setID(state.tasks.length + 1); // task id == index
        state.tasks.push(task);
    } 

    //delete task from project
    const deleteTask = (id) => {
        state.tasks = state.tasks.filter((task) => task.getID() !== id);
        console.log(state.tasks);
    }

    //mark task completed
    const completedTask = (id) => {
        const task = findTask(id);
        task.toggleComplete();
        markCompleted(); //check if all tasks are completed
    }

    //find task by id
    const findTask = (id) => {
        for (let task of state.tasks){
            if (task.getID() === id) {
                console.log("here");
                console.log(task.getID());
                return task;
            }
        }
    }

    //automatically mark project as completed
    const markCompleted = () => {
        for (let task of state.tasks){
            if (!task.getCompleteStatus()) return false;
        }return true;
    }

    return Object.assign(
        {   
            addTask,
            deleteTask,
            markCompleted,
            completedTask,
            state
        },
        editable(state),
    )
}