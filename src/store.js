import { createStore, applyMiddleware } from 'redux'
import { logger } from 'redux-logger'
import IssueReducer from './reducers/IssueReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import ReduxThunk from "redux-thunk" 


const store = createStore(IssueReducer, composeWithDevTools(applyMiddleware(logger, ReduxThunk)))

export default store;