import {createStore ,applyMiddleware ,combineReducers} from "redux"
import {composeWithDevTools} from 'redux-devtools-extension';
import {thunk ,  withExtraArgument} from 'redux-thunk';
import  { allSeraReducer, createSeraReducer } from "./Reducer/SeraReducer";
import  { SearchSeraReducer, seraMisyMitady } from "./Reducer/HitadyReducer";


const Reducer = combineReducers({
    sera : createSeraReducer ,
    allSera : allSeraReducer ,
    seraMisyMitady : seraMisyMitady,
    hitadySera : SearchSeraReducer
})


const middleware = [thunk]

const store = createStore(
    Reducer ,
    composeWithDevTools(applyMiddleware(...middleware))
)


export default store;