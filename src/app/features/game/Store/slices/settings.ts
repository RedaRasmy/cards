import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

const settings = createSlice({
    name: "settings",
    initialState: {
        darkMode: true,
        sound :false
    } ,
    reducers: {
        setDark: (state, action: PayloadAction<boolean>) => {
            return {
                ...state,
                darkMode: action.payload,
            };
        },
        toggleDark: (state) => {
            return {
                ...state,
                darkMode: !state.darkMode,
            };
        },
        setSound: (state, action: PayloadAction<boolean>) => {
            return {
                ...state,
                sound: action.payload,
            };
        },
        toggleSound: (state) => {
            return {
                ...state,
                sound: !state.sound,
            };
        },
        
    },
});

export const { 
    setDark,
    toggleDark,
    setSound,
    toggleSound
} = settings.actions

export default settings.reducer;


export const selectSound = (state:RootState) => state.settings.sound
export const selectIsDark = (state:RootState) => state.settings.darkMode