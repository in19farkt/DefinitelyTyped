import * as React from 'react';
import * as MUI from 'material-ui';

export type mixed = number | string;

export interface ResourceProps {
  name: string;
  list?: React.ComponentType;
  create?: React.ComponentType;
  edit?: React.ComponentType;
  show?: React.ComponentType;
  remove?: React.ComponentType;
  icon?: typeof MUI.SvgIcon;
  options?: { label: string };
}

export interface Pagination {
  page: number;
  perPage: number;
}

export interface Sort {
  field: string;
  order: 'ASC' | 'DESC';
}

export type ViewType = 'edit' | 'show' | 'list';
export type NotificationType = 'info' | 'warning' | 'confirm';
