import "../styles/page.css";
import {deleteTaskDiv,projectsDiv,newProject,expandProject,openClickedProject,newTask, deleteProject, editTask, markTaskCompleted} from "./projectLoader.js"
import {expandTask, singleProject} from "./projectTasksLoader.js";
import { basicModal, displayAddProjectModal, displayAddTasksModal, displayEditProjectModal, displayEditTaskModal } from "./modals.js"

const main = document.querySelector("#main");
const footer = document.querySelector("footer");

const modal = basicModal();

main.appendChild(projectsDiv);
main.appendChild(singleProject);
main.appendChild(modal);

export function addGlobalEventListeners(type, selector, callback) {
    document.addEventListener(type, e => {
        if (e.target.matches(selector)) callback(e);
    });
}

const callAddProjectModal = (event) => {
    displayAddProjectModal(modal);
    
}

const callEditProjectModal = () => {
    displayEditProjectModal(modal);
}

const callAddTasksModal = () => {
    displayAddTasksModal(modal);
}

const callEditTaskModal = (e) => {
    displayEditTaskModal(modal,e);
}


// expand/collapse project
addGlobalEventListeners("click",".projectTitle",expandProject);
addGlobalEventListeners("click","button.openProject",openClickedProject);
addGlobalEventListeners('click','.taskTitle',expandTask);
addGlobalEventListeners('click','.addTaskButton',callAddTasksModal);
addGlobalEventListeners('click','button#addProject',callAddProjectModal);
addGlobalEventListeners('click','.editProjectButton',callEditProjectModal);
addGlobalEventListeners('click','.deleteProjectButton',deleteProject)
addGlobalEventListeners('click','.deleteTaskButton',deleteTaskDiv);
addGlobalEventListeners('click','.editTaskButton',callEditTaskModal);
addGlobalEventListeners('click','.taskCompletedButton',markTaskCompleted)

