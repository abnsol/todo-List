import "../styles/page.css";
import {projectsDiv,newProject,expandProject,openClickedProject,newTask, deleteProject} from "./projectLoader.js"
import {expandTask, singleProject} from "./projectTasksLoader.js";

const main = document.querySelector("#main");
const footer = document.querySelector("footer");

newProject();


main.appendChild(projectsDiv);
main.appendChild(singleProject);

function addGlobalEventListeners(type, selector, callback) {
    document.addEventListener(type, e => {
        if (e.target.matches(selector)) callback(e);
    });
}

// expand/collapse project
addGlobalEventListeners("click",".projectTitle",expandProject);
addGlobalEventListeners('click','button#addProject',newProject);
addGlobalEventListeners("click","button.openProject",openClickedProject);
addGlobalEventListeners('click','.taskTitle',expandTask);
addGlobalEventListeners('click','.addTaskButton',newTask);
addGlobalEventListeners('click','.deleteProjectButton',deleteProject)