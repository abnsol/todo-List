import { createProject } from "./project";
import "../styles/projects.css"
import { displaySingleProject, removeProject } from "./projectTasksLoader";

let projects = [];
let currentOpenProject = 1;

export const projectsDiv = document.createElement("div");
projectsDiv.setAttribute("id","projects");

const addProjects = document.createElement("div");
addProjects.setAttribute("id","addProjects");

const addProjectButton = document.createElement("button");
addProjectButton.setAttribute("id","addProject");
addProjectButton.textContent = "+";
addProjects.appendChild(addProjectButton);

const addProjectText = document.createElement("div");
addProjectText.textContent = "Add Project";
addProjects.appendChild(addProjectText);

const projectsContainer = document.createElement("div");
projectsContainer.setAttribute("class","projectsContainer");

export const newProject = () => {
    //create form
    const project = createProject("Project Title","This is a 50 word long desciptiowoerkwoefkpwerk","00-00-0000","Urgent","very very long note","1");
    project.setID(projects.length + 1);
    project.addTask("task Title","This is a 50 word long desciptiowoerkwoefkpwerk","00-00-0000","Urgent","very very long note","1");
    projects.push(project);

    displayProject();
    console.log("afterProject");
    console.log(projects);
}

export const displayProject = () => {
    while (projectsContainer.firstChild){
        projectsContainer.removeChild(projectsContainer.firstChild);
    }

    projects.forEach((project) => {
        const projectDiv = document.createElement("div");
        projectDiv.setAttribute("class","projectDiv");
        projectDiv.setAttribute("id",`${project.state.id}`);

        const projectBar = document.createElement("div");
        projectBar.setAttribute("class","projectBar");

        const projectTitle = document.createElement("div");
        projectTitle.setAttribute("class","projectTitle");
        projectTitle.textContent = project.state.title;

        const dueDate = document.createElement("div");
        dueDate.setAttribute("class","dueDate");
        dueDate.textContent = project.state.dueDate;

        const urgency = document.createElement("div");
        urgency.setAttribute("class","urgency");
        urgency.textContent = project.state.urgent;

        const projectContentWrapper = document.createElement("div");
        projectContentWrapper.setAttribute("class","projectContentWrapper");

        const projectContent = document.createElement("div");
        projectContent.setAttribute("class","projectContent");

        const description = document.createElement("div");
        description.setAttribute("class","description");
        description.textContent = project.state.description;
        
        const note = document.createElement("div");
        note.setAttribute("class","note");
        note.textContent = project.state.notes;
        
        const openProject = document.createElement("div");
        const button = document.createElement("button");
        openProject.setAttribute("class","openProject");
        button.setAttribute("class","openProject");
        button.textContent = "Open Project";
        openProject.appendChild(button);

        projectBar.appendChild(projectTitle);
        projectBar.appendChild(dueDate);
        projectBar.appendChild(urgency);
        projectContent.appendChild(description);
        projectContent.appendChild(note);
        projectContent.appendChild(openProject);
        projectContentWrapper.appendChild(projectContent)
        projectDiv.appendChild(projectBar);
        projectDiv.appendChild(projectContentWrapper);
        projectsContainer.appendChild(projectDiv);
    })    
} 

export const expandProject = (event) => {
    const expand = event.target.closest(".projectDiv");
    expand.classList.toggle("projectDiv-Open");
}

export const openClickedProject = (event) => {
    const clicked = event.target.closest(".projectDiv").id;
    for (let project of projects){
        console.log(project.state.id);
        if (project.state.id == clicked){
            displaySingleProject(project);
            currentOpenProject = project.state.id;
        }
    }
}

export const newTask = () => {
    for (let project of projects){
        console.log(project.state.id);
        if (project.state.id == currentOpenProject){
            project.addTask("new","new","new","new","new","new");
            displaySingleProject(project);
        }
    }
}

export const deleteProject = () => {
    projects = projects.filter((project) => project.state.id != currentOpenProject);
    displayProject();
    removeProject();
    currentOpenProject = 1;
}

projectsDiv.appendChild(addProjects);
projectsDiv.appendChild (projectsContainer);

