//composition over inheritance
import { toDate,isBefore } from "date-fns";

export const editable = (state) => ({
    setID : (id) => {state.id = id;},  
    isDue : () => {
        let date = state.dueDate.split("-").map ((item) => parseInt(item))
        // console.log(date);
        
        let dueDate = new Date(date[0],date[1] - 1,[date[2]]);
        // console.log(dueDate);
        // console.log(Date.now())
        // console.log(isBefore(Date.now(),dueDate));
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