import { addGlobalEventListeners } from "./pageLoader.js";
import { editProject, editTask, newProject,newTask } from "./projectLoader.js";
import "../styles/modal.css";

export const basicModal = () => {
    const modal = document.createElement("dialog");
    modal.setAttribute("class","modal");

    const form = document.createElement("form");
    form.setAttribute("class","form");
    form.setAttribute("method","dialog");

    const titleLabel = document.createElement("label");
    titleLabel.textContent = "Title";
    titleLabel.setAttribute("for","title");
    const titleInput = document.createElement("input");
    titleInput.setAttribute("id","title");
    titleInput.setAttribute("name","title");
    titleInput.required = true;
    form.appendChild(titleLabel);
    form.appendChild(titleInput);

    const descriptionLabel = document.createElement("label");
    descriptionLabel.textContent = "Description";
    descriptionLabel.setAttribute("for","description");
    const descriptionInput = document.createElement("input");
    descriptionInput.setAttribute("id","description");
    descriptionInput.setAttribute("name","description");
    descriptionInput.required = true;
    form.appendChild(descriptionLabel);
    form.appendChild(descriptionInput);

    const notesLabel = document.createElement("label");
    notesLabel.textContent = "Notes";
    notesLabel.setAttribute("for","notes");
    const notesInput = document.createElement("input");
    notesInput.setAttribute("id","notes");
    notesInput.setAttribute("name","notes");
    notesInput.required = true;
    form.appendChild(notesLabel);
    form.appendChild(notesInput);

    const dueDateLabel = document.createElement("label");
    dueDateLabel.textContent = "DueDate";
    dueDateLabel.setAttribute("for","dueDate");
    const dueDateInput = document.createElement("input");
    dueDateInput.setAttribute("id","dueDate");
    dueDateInput.setAttribute("type","date");
    dueDateInput.setAttribute("name","dueDate");
    dueDateInput.required = true;
    form.appendChild(dueDateLabel);
    form.appendChild(dueDateInput);

    const urgentLabel = document.createElement("label");
    urgentLabel.textContent = "Urgency";
    urgentLabel.setAttribute("for","urgent");
    const urgentInput = document.createElement("select");
    const options = ['Urgent/Important','Important/Not Urgent','Urgent/Not Important','Not Important/Not Urgent'];
    options.forEach((option) => {
        const urgentOption = document.createElement("option");
        urgentOption.textContent = option;
        urgentOption.setAttribute("value",`${option}`);
        urgentInput.appendChild(urgentOption);
    })
    
    urgentInput.setAttribute("id","urgent");
    urgentInput.setAttribute("name","urgent");
    form.appendChild(urgentLabel);
    form.appendChild(urgentInput);

    const doneButton = document.createElement("button");
    doneButton.setAttribute("class","doneButton");
    doneButton.setAttribute("type","submit")
    doneButton.textContent = "Done";
    form.appendChild(doneButton);

    modal.appendChild(form);
    return modal;
};

let modalDialog = undefined;
let whichButtonTriggered = -1; 
let taskEvent = undefined;

addGlobalEventListeners('submit', '.form', (event) => {
    const form = document.querySelector('.form');
    event.preventDefault(); // Prevent default form submission behavior
    const formData = new FormData(form);
    modalDialog.close();
    let data = {
        title: formData.get('title'),
        description: formData.get('description'),
        urgent: formData.get('urgent'),
        dueDate: formData.get('dueDate'),
        notes: formData.get('notes'),
    };

    switch (whichButtonTriggered){
        case 1:
            newProject(data);
            break;
        case 2:
            editProject(data);
            break;
        case 3:
            newTask(data);
            break;

        case 4:
            editTask(data,taskEvent);
            break;

    }

    form.reset()
    
});

export const displayAddProjectModal = (modal) => {
    modal.showModal();
    modalDialog = modal;
    whichButtonTriggered = 1
};

export const displayEditProjectModal = (modal) => {
    modal.showModal();
    modalDialog = modal;
    whichButtonTriggered = 2;
};

export const displayAddTasksModal = (modal) => {
    modal.showModal();
    modalDialog = modal;
    whichButtonTriggered = 3;
};

export const displayEditTaskModal = (modal,event) => {
    modal.showModal();
    modalDialog = modal;
    whichButtonTriggered = 4;
    taskEvent = event;
}

