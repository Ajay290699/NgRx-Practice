import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ProjectService } from "../../Project/project.service";
import { catchError, map, mergeMap, of } from "rxjs";
import { Project } from "../../../models/project.model";
import * as ProjectActions from '../actions/project.action';


export class ProjectEffect {

    constructor(private actions$: Actions, private projectService: ProjectService) { }

    loadProject$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ProjectActions.loadProjects),
            mergeMap(() =>
                this.projectService.getProjects().pipe(
                    map(projects => ProjectActions.loadProjectsSuccess({ projects })), // store projects
                    catchError(() => of({ type: '[Projects API] Load Projects Failure' }))
                )
            )
        )
    )

    addProject$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ProjectActions.addProject),
            mergeMap(({ payload }) =>
                this.projectService.addProject(payload).pipe(
                    map((projects: Project) => ({ type: '[Project API] Add Project Success', payload: projects })),
                    catchError(() => of({ type: '[Project API] Add Project Failure' }))
                )
            )
        )
    );

    updateProject$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ProjectActions.updateProject),
            mergeMap(({ payload }) =>
                this.projectService.updateProject(payload).pipe(
                    map((project: Project) => ({ type: '[Project API] Update Project Success', payload: project })),
                    catchError(() => of({ type: '[Project API] Update Project Failure' }))
                )
            )
        )
    );

    deleteProject$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ProjectActions.updateProject),
            mergeMap(({ payload }) =>
                this.projectService.deleteProject(payload.id!).pipe(
                    map(() => ({ type: '[Project API] Remove Project Success', payload })),
                    catchError(() => of({ type: '[Project API] Remove Project Failure' }))
                )
            )
        )
    );

}