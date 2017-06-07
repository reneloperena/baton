import type Baton from './baton'
export type Action = (Baton, () => Promise<any>) => Promise<any>
