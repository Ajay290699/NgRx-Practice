import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as UserActions from '../actions/user.action';
import { catchError, exhaustMap, map, mergeMap, of, switchMap } from 'rxjs';
import { UserService } from '../../User/user.service';
import { User } from '../../../models/user.model';

@Injectable()
export class UserEffects {
    constructor(private actions$: Actions, private userService: UserService) { }

    loadUsers$ = createEffect(() =>
        this.actions$.pipe(
            ofType(UserActions.loadUsers),
            exhaustMap(() =>
                this.userService.getUsers().pipe(
                    map(users => UserActions.loadUsersSuccess({ users })), // store users
                    catchError(() => of({ type: '[User API] Load Users Failure' }))
                )
            )
        )
    );



    addUser$ = createEffect(() =>
        this.actions$.pipe(
            ofType(UserActions.addUser),
            mergeMap(({ payload }) =>
                this.userService.addUser(payload).pipe(
                    map((user: User) => ({ type: '[User API] Add User Success', payload: user })),
                    catchError(() => of({ type: '[User API] Add User Failure' }))
                )
            )
        )
    );

    updateUser$ = createEffect(() =>
        this.actions$.pipe(
            ofType(UserActions.updateUser),
            switchMap(({ payload }) =>
                this.userService.updateUser(payload).pipe(
                    map((user: User) => ({ type: '[User API] Update User Success', payload: user })),
                    catchError(() => of({ type: '[User API] Update User Failure' }))
                )
            )
        )
    );

    deleteUser$ = createEffect(() =>
        this.actions$.pipe(
            ofType(UserActions.removeUser),
            mergeMap(({ payload }) =>
                this.userService.deleteUser(payload.id!).pipe(
                    map(() => ({ type: '[User API] Remove User Success', payload })),
                    catchError(() => of({ type: '[User API] Remove User Failure' }))
                )
            )
        )
    );
}
