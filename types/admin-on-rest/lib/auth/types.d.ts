export const AUTH_LOGIN: string;
export const AUTH_CHECK: string;
export const AUTH_ERROR: string;
export const AUTH_LOGOUT: string;
export const AUTH_GET_PERMISSIONS: string;

export interface AuthGetPermissionsParams {
  record?: any;
  resource?: string;
}

interface AorAuthCheckParams {
  resource: string;
  route: 'show' | 'list' | 'create' | 'edit' | 'delete';
}

export type AuthClient = (
  <LoginParams = {}, AddCheckParams = {}>(
    type: string,
    params: LoginParams | AuthGetPermissionsParams | AorAuthCheckParams | AddCheckParams,
  ) => Promise<void>
);

export interface ResolvePermissionData<V, P> {
  exact: boolean;
  permissions: P;
  record: any;
  resource: string;
  value: V;
}

export type ResolveFunc<V, P> = (data: ResolvePermissionData<V, P>) => boolean | Promise<boolean>;
