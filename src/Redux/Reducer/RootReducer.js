import {combineReducers} from 'redux'
import SeraReducer from './SeraReducer';
import HitadyReducer from './HitadyReducer';

const RootReducer = combineReducers({
    sera : SeraReducer ,
    seraMisyMitady : HitadyReducer
})

export default RootReducer;