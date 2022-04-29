import { createAction, createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";

export interface UserState {
    maskUserName: boolean;
}

const getmaskUserNameState = createFeatureSelector<UserState>('user');

export const getMaskUserName = createSelector(
    getmaskUserNameState,
    state => state.maskUserName
);

export const userReducer = createReducer(
    { maskUserName: false },
    on(createAction('[User] Mask User Name'), state => {
        return {
            ...state,
            maskUserName: !state.maskUserName
        }
    })
);