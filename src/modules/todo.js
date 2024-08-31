import {editable} from "./manageTasks.js";

export function createTask(data){
    const state = {
        title : data.title,
        description : data.description,
        dueDate : data.dueDate,
        urgent : data.urgent,
        notes : data.notes,
        id : -1,
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