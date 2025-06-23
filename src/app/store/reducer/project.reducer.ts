import { createReducer, on } from "@ngrx/store";
import { Project } from "../../../models/project.model";
import { addProject, loadProjectsSuccess, removeProject, updateProject } from "../actions/project.action";


const intialState: Project[] = [];

export const ProjectReducer = createReducer(
    intialState,

    on(loadProjectsSuccess, (state, action) => [...action.projects]),

    on(addProject, (state, action) => [
        ...state,
        action.payload
    ]),

    on(updateProject, (state, action) =>
        state.map(project => project.id === action.payload.id ? { ...action.payload } : project)
    ),

    on(removeProject, (state, action) =>
        state.filter(project => project.id !== action.payload.id)
    )
)