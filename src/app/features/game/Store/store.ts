import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector, useStore } from "react-redux";
import cardsFlow from './slices/cardsFlow'
import gameOptions from './slices/gameOptions'
import settings from './slices/settings'


const makeStore = () => {
    return configureStore({
        reducer: {
            cardsFlow,
            gameOptions,
            settings
        }
    }) 
}


export default makeStore


/// REDUX-TYPES SETUP

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']


// Typed Redux-Hooks
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()
export const useAppStore = useStore.withTypes<AppStore>()