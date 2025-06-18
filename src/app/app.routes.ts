import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'user',
        loadComponent: () => import('./User/user/user.component').then(m => m.UserComponent)
    },
    {
        path: 'project',
        loadComponent: () => import('./Project/project/project.component').then(m => m.ProjectComponent)
    },
    {
        path: 'task',
        loadComponent: () => import('./Task/task/task.component').then(m => m.TaskComponent)
    },
    {
        path: '',
        redirectTo: 'user',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: 'user'
    }
];
