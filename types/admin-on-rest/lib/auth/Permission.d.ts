import * as React from 'react';
import { ResolveFunc } from './types';

interface Props<V, P> {
    children: React.ReactNode;
    exact?: boolean;
    value?: V;
    resolve?: ResolveFunc<V, P>;
}

/** Permission elements are for configuration only and should not be rendered */
type Permission<V = string, P = string> = React.StatelessComponent<Props<V, P>>;

export default Permission;
