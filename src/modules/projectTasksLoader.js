import {} from "./project.js";
import "../styles/singleProject.css";


export const singleProject = document.createElement("div");
singleProject.setAttribute("id","project");

export const displaySingleProject = (project) => {
    removeProject();

    const projectInfo = document.createElement("div");
    projectInfo.setAttribute("id","projectInfo");

    const todo = document.createElement("div");
    todo.setAttribute("id","todo");

    const aboutProject = document.createElement("div");
    aboutProject.setAttribute("class","aboutProject");

    const noteContainer = document.createElement("div");
    noteContainer.setAttribute("class","noteContainer");

    const noteTitle = document.createElement("div");
    noteTitle.setAttribute("class","noteTitle");

    const projectNote = document.createElement("div");
    projectNote.setAttribute("class","projectNote");

    const descriptionContainer = document.createElement("div");
    descriptionContainer.setAttribute("class","descriptionContainer");

    const descriptionTitle = document.createElement("div");
    descriptionTitle.setAttribute("class","descriptionTitle");

    const projectDescription = document.createElement("div");
    projectDescription.setAttribute("class","projectDescription");

    displayTasks(project.state.tasks,todo);
    displayProjectInfo(project,projectInfo);

    noteTitle.textContent = "Notes";
    projectNote.textContent = project.state.notes;
    descriptionTitle.textContent = "Description";
    projectDescription.textContent = project.state.description;


    noteContainer.appendChild(noteTitle);
    noteContainer.appendChild(projectNote);
    descriptionContainer.appendChild(descriptionTitle);
    descriptionContainer.appendChild(projectDescription);
    aboutProject.appendChild(descriptionContainer);
    aboutProject.appendChild(noteContainer);
    todo.appendChild(aboutProject);
    singleProject.appendChild(projectInfo);
    singleProject.appendChild(todo);
}

const displayTasks = (tasks,todo) => {
    const projectTasks = document.createElement("div");
    projectTasks.setAttribute("class","projectTasks");

    tasks.forEach((task) => {
        console.log(task)
        const Tasks = document.createElement("div");
        Tasks.setAttribute("class","Tasks");
        Tasks.setAttribute("id",`${task.getID()}`);
        
        const taskTitle = document.createElement("div");
        taskTitle.setAttribute("class","taskTitle");
        taskTitle.textContent = task.state.title;

        const dueDate = document.createElement("div");
        dueDate.setAttribute("class","dueDate");
        dueDate.textContent = task.state.dueDate;

        const urgency = document.createElement("div");
        urgency.setAttribute("class","urgency");
        urgency.textContent = task.state.urgent;

        const taskContentWrapper = document.createElement("div");
        taskContentWrapper.setAttribute("class","taskContentWrapper");

        const taskContent = document.createElement("div");
        taskContent.setAttribute("class","taskContent");

        const description = document.createElement("div");
        description.setAttribute("class","description");
        description.textContent = task.state.description;
        
        const note = document.createElement("div");
        note.setAttribute("class","note");
        note.textContent = task.state.notes;

        const buttonContainer = document.createElement("div");
        buttonContainer.setAttribute("class","buttonContainer");

        const deleteTaskButton = document.createElement("button");
        deleteTaskButton.setAttribute("class","deleteTaskButton");
        deleteTaskButton.textContent = "Delete";

        const editTaskButton = document.createElement("button");
        editTaskButton.setAttribute("class","editTaskButton");
        editTaskButton.textContent = "Edit";

        const taskCompletedButton = document.createElement("button");
        taskCompletedButton.setAttribute("class","taskCompletedButton");
        taskCompletedButton.textContent = "Done";

        if (task.state.complete){
            Tasks.setAttribute("style","background-color:lightgreen;");
            taskContent.setAttribute("style","background-color:lightgreen;");
            taskCompletedButton.setAttribute("style","background-color:lightgreen;");
        }else if(!task.isDue()){
            Tasks.setAttribute("style","background-color:#bd4949; color:red;");
            taskContent.setAttribute("style","background-color:#bd4949;");
            taskCompletedButton.setAttribute("style","background-color:#bd4949;");
        }

        buttonContainer.appendChild(editTaskButton);
        buttonContainer.appendChild(deleteTaskButton);
        buttonContainer.appendChild(taskCompletedButton);

        Tasks.appendChild(taskTitle);
        Tasks.appendChild(dueDate);
        Tasks.appendChild(urgency);
        taskContent.appendChild(description);
        taskContent.appendChild(note);
        taskContent.appendChild(buttonContainer);
        taskContentWrapper.appendChild(taskContent);
        Tasks.appendChild(taskContentWrapper);

        projectTasks.appendChild(Tasks);
    })
    todo.appendChild(projectTasks);
}

const displayProjectInfo = (project,projectInfo) => {
    const projectInfoTitle = document.createElement("div");
    projectInfoTitle.setAttribute("class","projectInfoTitle");

    const projectInfoAdditional = document.createElement("div");
    projectInfoAdditional.setAttribute("class","projectInfoAdditional");

    const left = document.createElement("div");
    left.setAttribute("class","left");

    const urgencyContainer = document.createElement("div");
    urgencyContainer.setAttribute("class","urgencyContainer");
    const dueDateContainer = document.createElement("div");
    dueDateContainer.setAttribute("class","dueDateContainer");
    const numberOfTasksContainer = document.createElement("div");
    numberOfTasksContainer.setAttribute("class","numberOfTasksContainer");
    numberOfTasksContainer.textContent = "Tasks: " + project.state.tasks.length;

    projectInfoTitle.textContent = project.state.title;
    urgencyContainer.textContent = project.state.urgent;
    dueDateContainer.textContent = project.state.dueDate;

    const right = document.createElement("div");
    right.setAttribute("class","right");

    const addTaskButton = document.createElement("button");
    addTaskButton.setAttribute("class","addTaskButton");
    const deleteProjectButton = document.createElement("button");
    deleteProjectButton.setAttribute("class","deleteProjectButton");
    const editProjectButton = document.createElement("button");
    editProjectButton.setAttribute("class","editProjectButton");

    addTaskButton.textContent = "Add Task";
    deleteProjectButton.textContent = "Delete Project";
    editProjectButton.textContent = "Edit Project";



    left.appendChild(urgencyContainer);
    left.appendChild(dueDateContainer);
    left.appendChild(numberOfTasksContainer);
    right.appendChild(addTaskButton);
    right.appendChild(editProjectButton);
    right.appendChild(deleteProjectButton);
    projectInfoAdditional.appendChild(left);
    projectInfoAdditional.appendChild(right);
    projectInfo.appendChild(projectInfoTitle);
    projectInfo.appendChild(projectInfoAdditional);
}

export const expandTask = (event) => {
    const expand = event.target.closest(".Tasks");
    expand.classList.toggle("Tasks-Open");
}

export const removeProject = () => {
    while (singleProject.firstChild){
        singleProject.removeChild(singleProject.firstChild);
    }
}