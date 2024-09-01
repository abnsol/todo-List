import {editable} from "./manageTasks.js";

export function createTask(data){
    let state = {
        title : data.title,
        description : data.description,
        dueDate : data.dueDate,
        urgent : data.urgent,
        notes : data.notes,
        id : -1,
        complete : false,
    }

    let getID = () => state.id;                       
    let getCompleteStatus = () => state.complete;  

    //setComplete
    let toggleComplete = () => {
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