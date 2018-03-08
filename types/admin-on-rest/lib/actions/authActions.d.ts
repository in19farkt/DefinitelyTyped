import { Action } from 'redux';
import { AuthGetPermissionsParams } from '../auth/types';

export const USER_LOGIN: string;
export const USER_LOGIN_LOADING: string;
export const USER_LOGIN_FAILURE: string;
export const USER_LOGIN_SUCCESS: string;
export const USER_CHECK: string;
export const USER_LOGOUT: string;

export function userLogin(payload: any, pathName: string): Action;
export function userCheck(payload: AuthGetPermissionsParams, pathName: string): Action;
export function userLogout(): Action;
