import * as React from 'react';
import { AuthClient, ResolveFunc } from './types';

interface IOwnProps<V, P> {
    children: React.ReactChild;
    exact?: boolean;
    loading?: React.ComponentType;
    notFound?: React.ComponentType;
    record?: any;
    resource?: string;
    value?: V;
    resolve?: ResolveFunc<V, P>;
}

interface IStateProps {
    authClient: AuthClient;
}

export class WithPermissionComponent<V = any, P = any> extends React.Component<IStateProps & IOwnProps<V, P>> { }

export default class Container<V = any, P = any> extends React.Component<IOwnProps<V, P>> { }
