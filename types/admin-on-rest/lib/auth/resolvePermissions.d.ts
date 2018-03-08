import * as React from 'react';
import { ResolveFunc } from './types';

interface Mapping<V, P> {
    permissions: V;
    resolve: ResolveFunc<V, P>;
    view: React.ReactNode;
    exact: boolean;
}

interface ResolverFactoryData<P> {
    permissions: P;
    record: any;
    resource: string;
}

type ResolverFactory = <P>(data: ResolverFactoryData<P>) => Resolver<P>;

interface Matcher {
    matched: boolean;
    view: React.ReactNode;
}

type Resolver<P> = <V>(mapping: Mapping<V, P>) => Promise<Matcher>;

interface MappingsResolverData<V, P> {
    mappings: Array<Mapping<V, P>>;
    permissions: P;
    record: any;
    resource: string;
}

type MappingsResolver = <V, P>(data: MappingsResolverData<V, P>) => Matcher;

export const resolvePermission: ResolverFactory;

export default MappingsResolver;
