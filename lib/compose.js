import type Action from './action'
import type Baton from './baton'

export default function compose (actions: Array <Action>): Action {
  if (!Array.isArray(actions)) throw new Error('Actions array is not an array')
  for (const action of actions) {
    if (typeof action !== 'function') throw new Error('Actions array must be composed of functions')
  }
  return async (baton: Baton, next: () => Promise<any>) => actions.reduceRight(
    (acc, action) => async () => action(baton, acc),
    () => Promise.resolve()
  )(baton, next)
}
