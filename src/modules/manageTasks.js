//composition over inheritance

export const editable = (state) => ({
    setID : (id) => {state.id = id;},  
    isDue : () => {state.dueDate.getTime() <= Date.now()}, //due date passed?
    changeState : (newState) => {
        state.title = newState.title;
        state.description = newState.description;
        state.dueDate = newState.dueDate;
        state.urgent = newState.urgent;
        state.notes = newState.notes;
        state.complete = false;
    }
})