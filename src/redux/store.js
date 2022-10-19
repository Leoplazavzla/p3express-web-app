import {configureStore} from "@reduxjs/toolkit";
//import projectReducer from "./projectDuck";
import projectReducer from './project.slice'
import rolesReducer from './rolesSlice'
import companiesReducer from './companiesSlice'


export const store = configureStore({
    reducer: {
        projects: projectReducer,
        roles: rolesReducer,
        companyName: companiesReducer
    }
})


/*
import { combineReducers, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import configureStore from 'redux/dist/redux'
import {composeWithDevTools} from 'redux-devtools-extension'


const rootReducer = combineReducers({
    projects: projectReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore() {
    const store = configureStore( rootReducer, composeEnhancers(applyMiddleware(thunk)) ,composeWithDevTools(  ) )
    return store
}*/
