import { Action } from 'redux';
import { NotificationType } from '../types';

export const SHOW_NOTIFICATION: string;
export const HIDE_NOTIFICATION: string;

export function showNotification(text: string, type?: NotificationType): Action;
export function hideNotification(): Action;
