import type Baton from './baton'
import Strategy from './strategy'
import compose from './compose'

function Dispatcher () {
  this.strategies = new Map()
}

Dispatcher.prototype.setStrategy = function (batonType: string, strategy: Strategy) {
  this.strategies.set(batonType, strategy)
}

Dispatcher.prototype.dispatch = async function (baton: Baton) {
  const { type } = baton
  const strategy = this.strategies.get(type)
  return compose(strategy.getActions())(baton, () => Promise.resolve())
}

export default Dispatcher
