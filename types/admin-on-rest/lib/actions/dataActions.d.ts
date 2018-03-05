import { Action } from 'redux';
import { Pagination, Sort, mixed, ViewType } from '../types';

export const CRUD_GET_LIST: string;
export const CRUD_GET_LIST_LOADING: string;
export const CRUD_GET_LIST_FAILURE: string;
export const CRUD_GET_LIST_SUCCESS: string;
export const CRUD_GET_ONE: string;
export const CRUD_GET_ONE_LOADING: string;
export const CRUD_GET_ONE_FAILURE: string;
export const CRUD_GET_ONE_SUCCESS: string;
export const CRUD_CREATE: string;
export const CRUD_CREATE_LOADING: string;
export const CRUD_CREATE_FAILURE: string;
export const CRUD_CREATE_SUCCESS: string;
export const CRUD_UPDATE: string;
export const CRUD_UPDATE_LOADING: string;
export const CRUD_UPDATE_FAILURE: string;
export const CRUD_UPDATE_SUCCESS: string;
export const CRUD_DELETE: string;
export const CRUD_DELETE_LOADING: string;
export const CRUD_DELETE_FAILURE: string;
export const CRUD_DELETE_SUCCESS: string;

export function crudGetList(resource: string, pagination: Pagination, sort: Sort, filter: Record<string, string>, cancelPrevious?: boolean): Action;
export function crudGetOne(resource: string, id: mixed, basePath: string, cancelPrevious?: boolean): Action;
export function crudCreate(resource: string, data: any, basePath: string, redirectTo?: ViewType | false): Action;
export function crudUpdate<T = any>(resource: string, id: mixed, data: T, previousData: T, basePath: string, redirectTo: ViewType | false): Action;
export function crudDelete(resource: string, id: mixed, previousData: any, basePath: string, redirectTo: ViewType | false): Action;

// Reference related actions
export const CRUD_GET_MANY: string;
export const CRUD_GET_MANY_LOADING: string;
export const CRUD_GET_MANY_FAILURE: string;
export const CRUD_GET_MANY_SUCCESS: string;
export const CRUD_GET_MATCHING: string;
export const CRUD_GET_MATCHING_LOADING: string;
export const CRUD_GET_MATCHING_FAILURE: string;
export const CRUD_GET_MATCHING_SUCCESS: string;
export const CRUD_GET_MANY_REFERENCE: string;
export const CRUD_GET_MANY_REFERENCE_LOADING: string;
export const CRUD_GET_MANY_REFERENCE_FAILURE: string;
export const CRUD_GET_MANY_REFERENCE_SUCCESS: string;

export function crudGetMany(resource: string, ids: mixed[]): Action;

/**
 * @param relatedTo `${resource}@${source}`
 */
export function crudGetMatching(reference: string, relatedTo: string, pagination: Pagination, sort: Sort, filter: Record<string, string>): Action;

/**
 * @param relatedTo `${resource}@${source}`
 */
export function crudGetManyReference(reference: string, target: string, id: mixed, relatedTo: string, pagination: Pagination, sort: Sort, filter: Record<string, string>): Action;
