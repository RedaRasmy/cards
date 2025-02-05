import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Difficulty } from "../../types/game.type";
import { PlayersNumber } from "../../types/players.type";

const gameOptions = createSlice({
    name: "gameOptions",
    initialState: {
        difficulty: "easy" as Difficulty,
        playersNumber: 2 as PlayersNumber,
    } ,
    reducers: {
        changePlayersNumber: (state, action: PayloadAction<PlayersNumber>) => {
            return {
                ...state,
                playersNumber: action.payload,
            };
        },
        changeDifficulty: (state, action: PayloadAction<Difficulty>) => {
            return {
                ...state,
                difficulty: action.payload,
            };
        },
    },
});

export const { 
    changeDifficulty,
    changePlayersNumber
} = gameOptions.actions;

export default gameOptions.reducer;