import * as React from 'react';
import { Location } from 'history';

import * as actions from '../actions/authActions';
import { AuthGetPermissionsParams } from './types';

interface OwnProps {
    authParams: AuthGetPermissionsParams;
    location: Location;
}

interface StateProps {
    userCheck: typeof actions.userCheck;
}

/**
 * Restrict access to children
 *
 * Expects an authClient prop, which will be called with AUTH_CHECK upon mount and update
 *
 * Useful for Route components - used in CrudRoute
 *
 * @example
 * <Route path="/foo" render={routeParams =>
 *   <Restricted authClient={authClient} location={routeParams.location}>
 *     <Foo />
 *   </Restricted>
 * } />
 */
export class Restricted extends React.Component<OwnProps & StateProps> { }

export default class extends React.Component<OwnProps> { }
