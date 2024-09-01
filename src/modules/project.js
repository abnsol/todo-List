import {editable} from "./manageTasks.js";
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
    }

    let taskIds = 0;
    // console.log(typeof(state.dueDate));
    // isDue();

    //add tasks in project
    const addTask = (data) => {
        const task = createTask(data);
        task.setID(++taskIds); // task id == index
        state.tasks.push(task);
    } 

    //delete task from project
    const deleteTask = (id) => {
        state.tasks = state.tasks.filter((task) => task.getID() != id);
    }

    //mark task completed
    const completedTask = (id) => {
        const task = findTask(id);
        task.toggleComplete();
    }

    //find task by id
    const findTask = (id) => {
        for (let task of state.tasks){
            if (task.getID() == id) {
                return task;
            }
        }
    }

    //automatically mark project as completed
    const markCompleted = () => {
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
        editable(state),
    )
}