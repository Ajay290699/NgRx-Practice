import { createAction, props } from "@ngrx/store";
import { User } from "../../../models/user.model";

export const addUser = createAction(
    '[User] Add',
    props<{ payload: User }>()
)

export const updateUser = createAction(
    '[User] Update',
    props<{ payload: User }>()
);

export const updateUserSuccess = createAction(
    '[User] User Update Success',
    props<{ user: User }>()
);

export const removeUser = createAction(
    '[User] Remove',
    props<{ payload: Partial<User> }>()
)

export const loadUsers = createAction('[User] Load Users');

export const loadUsersSuccess = createAction(
    '[User API] Load Users Success',
    props<{ users: User[] }>()
);
