import { combineReducers } from "@reduxjs/toolkit";
import { composeWithDevTools } from '@redux-devtools/extension';
import { createStore, applyMiddleware } from 'redux';
import { TypedUseSelectorHook, useSelector as useReduxSelector } from 'react-redux';
import thunk from 'redux-thunk';
import { personajeReducer } from "../reducers/personaje.reducers";


const rootReducer = combineReducers({
    personajes: personajeReducer,
});

export type IRootState = ReturnType<typeof rootReducer>;

export const useSelector: TypedUseSelectorHook<IRootState> = useReduxSelector;

export const store = createStore(
    rootReducer, composeWithDevTools(applyMiddleware(thunk))
)