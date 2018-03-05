import { Action } from 'redux';

export const CRUD_SHOW_FILTER: string;
export const CRUD_HIDE_FILTER: string;
export const CRUD_SET_FILTER: string;

export function showFilter(resource: string, field: string): Action;
export function hideFilter(resource: string, field: string): Action;
export function setFilter(resource: string, field: string, value: any): Action;
