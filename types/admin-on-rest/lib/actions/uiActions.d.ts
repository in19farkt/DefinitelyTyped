import { Action } from 'redux';

export const TOGGLE_SIDEBAR: string;
export const SET_SIDEBAR_VISIBILITY: string;
export const REFRESH_VIEW: string;

export function toggleSidebar(): Action;
export function setSidebarVisibility(isOpen: boolean): Action;
export function refreshView(): Action;
