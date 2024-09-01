// attach methods after returned from the local storage

import { editable, projectMethod, titleMethod } from "./manageTasks"

export const attachMethods = (state) => {
    state.tasks = attachTaskMethod(state.tasks);
    console.log("state here")
    console.log(state);
    console.log(state.tasks)
    return Object.assign(
        {state},
        editable(state),
        projectMethod(state),
    )
}

export const attachProjectMethod = (projects) => {
    projects = projects.map((project) => project = attachMethods(project.state));
    return projects;
}

export const attachMethodsToTasks = (state) => {
    return Object.assign(
        {state},
        editable(state),
        titleMethod(state),
    )
}

export const attachTaskMethod = (tasks) => {
    console.log("HEREHEREHERE")
    tasks = tasks.map((task) => task = attachMethodsToTasks(task.state))
    return tasks;
}
