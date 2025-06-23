import { createFeatureSelector } from '@ngrx/store';
import { Project } from '../../../models/project.model';

export const selectAllProjects = createFeatureSelector<Project[]>('project');