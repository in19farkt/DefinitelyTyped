import * as React from 'react';
import { AuthClient } from './types';

interface IOwnProps {
    children: Array<React.ReactElement<any>>;
    notFound?: React.ComponentType;
    loading?: React.ComponentType;
    record?: any;
    resource?: string;
}

interface IStateProps {
    authClient: AuthClient;
}

export class SwitchPermissionsComponent extends React.Component<IOwnProps & IStateProps> { }

export default class extends React.Component<IOwnProps> { }
