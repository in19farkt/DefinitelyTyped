import { Action } from 'redux';
import { ResourceProps } from '../types';

export const DECLARE_RESOURCES: string;

export function declareResources(resources: ResourceProps[]): Action;
