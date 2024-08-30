import {editable} from "./manageTasks.js";

export function createTask(title,description,dueDate,urgent,notes,id){
    const state = {
        title,
        description,
        dueDate,
        urgent,
        notes,
        id,
        complete : false,
    }

    const getID = () => state.id;                       
    const getCompleteStatus = () => state.complete;  

    //setComplete
    const toggleComplete = () => {
        if (state.complete){
            state.complete = false;
        }else{
            state.complete = true;
        }
    }

    return Object.assign(
        {
            getID,
            toggleComplete,
            getCompleteStatus,
            state
        },
        editable(state),
    )
}