import { createReducer, on } from "@ngrx/store";
import { User } from "../../../models/user.model";
import { addUser, loadUsers, loadUsersSuccess, removeUser, updateUser } from "../actions/user.action";


const intialState: User[] = [];

export const userReducer = createReducer(
    intialState,

    on(loadUsersSuccess, (state, action) => [...action.users]),

    on(addUser, (state, action) => [
        ...state,
        action.payload
    ]),

    on(updateUser, (state, action) =>
        state.map(user => user.id === action.payload.id ? { ...action.payload } : user)
    ),

    on(removeUser, (state, action) =>
        state.filter(user => user.id !== action.payload.id)
    )
)