import { createProject } from "./project";
import "../styles/projects.css"
import { displaySingleProject, removeProject } from "./projectTasksLoader";
import { attachProjectMethod } from "./attachMethods";

let projects = [];
let currentOpenProject = 1;
let projectIds = 0;

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

export const newProject = (data) => {
    const project = createProject(data);
    project.setID(++projectIds);
    projects.push(project);
    displaySingleProject(project);
    currentOpenProject = project.state.id;
    saveProjectsToLocalStorage();
    saveProjectIds();

    project.isDue();
    displayProject();
}

export const displayProject = () => {
    while (projectsContainer.firstChild){
        projectsContainer.removeChild(projectsContainer.firstChild);
    }
    saveProjectsToLocalStorage();  
    // loadProjectsFromLocalStorage();  

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

        // const description = document.createElement("div");
        // description.setAttribute("class","description");
        // description.textContent = project.state.description;
        
        // const note = document.createElement("div");
        // note.setAttribute("class","note");
        // note.textContent = project.state.notes;

        console.log(project);
        if (project.markCompleted()){
            projectDiv.setAttribute("style","background-color:lightgreen;");
            projectContentWrapper.setAttribute("style","background-color:lightgreen;");
        }else if(!project.isDue()){
            projectDiv.setAttribute("style","background-color:#bd4949; color:red;");
            projectContentWrapper.setAttribute("style","background-color:#bd4949; color:red;");
        }
        
        const openProject = document.createElement("div");
        const button = document.createElement("button");
        openProject.setAttribute("class","openProject");
        button.setAttribute("class","openProject");
        button.textContent = "Open Project";
        openProject.appendChild(button);

        projectBar.appendChild(projectTitle);
        projectBar.appendChild(dueDate);
        projectBar.appendChild(urgency);
        // projectContent.appendChild(description);
        // projectContent.appendChild(note);
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
        if (project.state.id == clicked){
            displaySingleProject(project);
            currentOpenProject = project.state.id;
        }
    }
}

export const newTask = (data) => {
    for (let project of projects){
        console.log(project.state.id);
        if (project.state.id == currentOpenProject){
            project.addTask(data);
            displaySingleProject(project);
            displayProject();
        }
    }
}

export const editProject = (data) => {
    for (let project of projects){
        console.log("project.id")
        console.log(project.state.id);
        if (project.state.id == currentOpenProject){
            project.changeState(data);
            displaySingleProject(project);
            displayProject();
        }
    }
}

export const deleteProject = () => {
    projects = projects.filter((project) => project.state.id != currentOpenProject);
    removeProject();
    currentOpenProject = 1;
    displayProject();
}

export const deleteTaskDiv = (event) => {
    const taskToDelete = event.target.closest(".Tasks").id;
    for (let project of projects){
        if (project.state.id == currentOpenProject){
            console.log("projects");
            console.log(project);
            project.state.tasks = project.deleteTask(taskToDelete);
            displaySingleProject(project);
            displayProject();
            console.log(project.state.tasks);
        }
    }
}

export const editTask = (data,ev) => {
    const taskToEdit = ev.target.closest(".Tasks").id;
    
    for (let project of projects){
        if (project.state.id == currentOpenProject){
            const task = project.findTask(taskToEdit);
            task.changeState(data)
            displaySingleProject(project);
        }
    }      
} 

export const markTaskCompleted = (event) => {
    const doneButton = event.target;
    const nearestTaskDiv = event.target.closest('.Tasks').id;

    for (let project of projects){
        if (project.state.id == currentOpenProject){
            project.completedTask(nearestTaskDiv);
            displaySingleProject(project);
            displayProject();
            console.log(project.state.tasks)
        }
    }
}

projectsDiv.appendChild(addProjects);
projectsDiv.appendChild (projectsContainer);

const loadProjectsFromLocalStorage = () => {
    const storedProjects = JSON.parse(localStorage.getItem('projects'));

    if (storedProjects) {
        projects = attachProjectMethod(storedProjects);
        projectIds = Number(localStorage.getItem('projectIds'));
    } else {
        const templateData = {
            title : 'PROJECT X',
            description : 'Short and brief Description',
            notes : 'Very long note to remember',
            dueDate : '2100-12-21',
            urgent : 'Urgent/Important'
        }

        const demoProject = newProject(templateData);
        localStorage.setItem('projects', JSON.stringify(projects));
        localStorage.setItem('projectIds',projectIds);
    }

    displayProject();
};

const saveProjectsToLocalStorage = () => {
    localStorage.setItem('projects', JSON.stringify(projects));
};

const saveProjectIds = () => {
    localStorage.setItem('projectIds',projectIds);
}

loadProjectsFromLocalStorage();