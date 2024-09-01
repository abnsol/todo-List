//composition over inheritance
import { toDate,isBefore } from "date-fns";
import { createTask} from "./todo";
import { attachProjectMethod } from "./attachMethods";

export const editable = (state) => ({
    setID : (id) => {state.id = id;},  
    isDue : () => {
        if (!state.dueDate) return false;
        let date = state.dueDate.split("-").map ((item) => parseInt(item))
        
        let dueDate = new Date(date[0],date[1] - 1,[date[2]]);
        return isBefore(Date.now(),dueDate);
    }, //due date passed?
    changeState : (newState) => {
        state.title = newState.title;
        state.description = newState.description;
        state.dueDate = newState.dueDate;
        state.urgent = newState.urgent;
        state.notes = newState.notes;
        state.complete = false;
    }
})

export const projectMethod = (state) => ({
    addTask : (data) => {
        const task = createTask(data);
        task.setID(++state.tasksIds); // task id == index
        state.tasks.push(task);
    }, 

    //delete task from project
    deleteTask : (id) => {
        state.tasks = state.tasks.filter((task) => task.state.id != id);
        return state.tasks;
    },

    //mark task completed
    completedTask : (id) => {
        let task = undefined;
        for (let stateTask of state.tasks){
            if (stateTask.state.id == id) {
                task = stateTask;
            }
        };

        if (task.state.complete){
            task.state.complete = false;
        }else{
            task.state.complete = true;
        }
    },

    //find task by id
    findTask : (id) => {
        for (let task of state.tasks){
            if (task.state.id == id) {
                return task;
            }
        }
    },

    //automatically mark project as completed
    markCompleted : () => {
        if (state.tasks.length == 0) return false;

        for (let task of state.tasks){
            if (!task.getCompleteStatus()) return false;
        }return true;
    }
})

export const titleMethod = (state) => ({
    getID : () => state.id,                       
    getCompleteStatus : () => state.complete, 

    //setComplete
    toggleComplete : () => {
        if (state.complete){
            state.complete = false;
        }else{
            state.complete = true;
        }
    }
})