import "../styles/page.css";
import {projectsDiv,newProject,expandProject} from "./projectLoader.js"

const main = document.querySelector("#main");
const footer = document.querySelector("footer");

newProject();

const singleProject = document.createElement("div");
singleProject.setAttribute("id","project");

const projectInfo = document.createElement("div");
projectInfo.setAttribute("id","projectInfo")
const todo = document.createElement("div");
todo.setAttribute("id","todo");

singleProject.appendChild(projectInfo);
singleProject.appendChild(todo);

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