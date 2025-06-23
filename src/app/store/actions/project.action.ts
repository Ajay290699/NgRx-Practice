import { createAction, props } from "@ngrx/store";
import { Project } from "../../../models/project.model";

export const addProject = createAction(
    '[Project] Add',
    props<{ payload: Project }>()
)

export const updateProject = createAction(
    '[Project] Update',
    props<{ payload: Project }>()
);

export const removeProject = createAction(
    '[Project] Remove',
    props<{ payload: Partial<Project> }>()
)

export const loadProjects = createAction('[Project] Load Projects');

export const loadProjectsSuccess = createAction(
    '[Project API] Load Projects Success',
    props<{ projects: Project[] }>()
);