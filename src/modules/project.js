import {editable, projectMethods} from "./manageTasks.js";
import { createTask } from "./todo.js";


export function createProject(data){
    let state = {
        title : data.title,
        description : data.description, 
        dueDate : data.dueDate,
        urgent : data.urgent,
        notes : data.notes,
        id : -1,
        complete : false,
        tasks : [],
        tasksIds : 0
    }


    //add tasks in project
    let addTask = (data) => {
        const task = createTask(data);
        task.setID(++state.tasksIds); // task id == index
        state.tasks.push(task);
    } 

    //delete task from project
    let deleteTask = (id) => {
        state.tasks = state.tasks.filter((task) => task.state.id != id);
        return state.tasks;
    }

    //mark task completed
    let completedTask = (id) => {
        console.log("HERE");
        const task = findTask(id);
        task.toggleComplete();
    }

    //find task by id
    let findTask = (id) => {
        for (let task of state.tasks){
            if (task.state.id == id) {
                return task;
            }
        }
    }

    //automatically mark project as completed
    let markCompleted = () => {
        if (state.tasks.length == 0) return false;

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
            findTask,
            state
        },
        editable(state)
    )
}