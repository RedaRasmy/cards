import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector, useStore } from "react-redux";
import cardsFlow from "./slices/cardsFlow";
import gameOptions from "./slices/gameOptions";
import settings from "./slices/settings";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import sessionStorage from 'redux-persist/lib/storage/session'

const rootPersistConfig = {
    key: "root",
    storage,
};

const cardsFlowPersistConfig = {
    key: "game",
    storage : sessionStorage,
};

const rootReducer = combineReducers({
    cardsFlow : persistReducer(
        cardsFlowPersistConfig,
        cardsFlow
    ),
    gameOptions : persistReducer(
        cardsFlowPersistConfig,
        gameOptions
    ),
    settings,
})

const persistedReducer = persistReducer(
    rootPersistConfig
    ,rootReducer
);

const makeStore = () => {
    const store = configureStore({
        reducer: persistedReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                serializableCheck: {
                    ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
                },
            }),
    });
    return store;
};

export default makeStore;


/// REDUX-TYPES SETUP

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

// Typed Redux-Hooks
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppStore = useStore.withTypes<AppStore>();
