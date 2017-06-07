import Strategy from '../lib/strategy'
import Dispatcher from '../lib/dispatcher'
async function action1 (baton, next) {
  baton.data = baton.data + 'o'
  await next()
}
async function action2 (baton, next) {
  await next()
  baton.data = baton.data + 'l'
}
async function action3 (baton, next) {
  await next()
  baton.data = baton.data + 'a'
}

const strategy = new Strategy()

strategy.add(action1)
strategy.add(action2)
strategy.add(action3)

const dispatcher = new Dispatcher()

dispatcher.setStrategy('hello', strategy)

async function run () {
  const baton = { type: 'hello', data: 'h' }
  await dispatcher.dispatch(baton)
  console.log(baton.data)
}

run()
