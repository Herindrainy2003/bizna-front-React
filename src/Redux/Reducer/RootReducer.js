import {combineReducers} from 'redux'
import SeraReducer from './SeraReducer';

const RootReducer = combineReducers({
    sera : SeraReducer
})

export default RootReducer;