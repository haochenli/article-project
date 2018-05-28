import { applyMiddleware, redux } from 'redux'
import loggerMiddleware from 'redux-logger'

const appMiddlewares = [
  // loggerMiddleware
]

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default composeEnhancers(applyMiddleware(...appMiddlewares))
