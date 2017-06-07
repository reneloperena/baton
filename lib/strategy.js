import type Action from './action'

function Strategy () {
  this.strategy = []
}

Strategy.prototype.add = function (action: Action) {
  this.strategy.push(action)
}

Strategy.prototype.getActions = function () : Array<Action> {
  return this.strategy
}

export default Strategy
