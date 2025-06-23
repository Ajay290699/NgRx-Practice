import { createFeatureSelector, createSelector } from "@ngrx/store";
import { User } from "../../../models/user.model";


export const selectedUsers = createFeatureSelector<(User[])>('user');

export const selectAllUsers = createSelector(
    selectedUsers,
    (state: User[]) => state
)