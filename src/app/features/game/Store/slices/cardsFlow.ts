import Distribute from "../../utils/distribute";
import getRequirements from "../../utils/getRequirements";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import draw from "../reducers/draw";
import { CardsFlow,  OngoingGame } from "../types";
import getNextPlayer from "../../utils/getNextPlayer";
import handlePlay from "../reducers/play/handlePlay";
import { Turn } from "../../types/game.type";
import { PlayersNumber } from "../../types/players.type";
import { Card, Color } from "../../types/cards.type";

const cardsFlow = createSlice({
    name: "cardsFlow",
    initialState: 'idle' as CardsFlow ,
    reducers: {
        // starting the game by distribute the cards !
        start: (state, action: PayloadAction<PlayersNumber>) => {
            const { currentCard, deck, hands } = Distribute(action.payload);
            return {
                currentCard,
                hands,
                deck,
                currentPlayer: 0,
                requirements: getRequirements(currentCard),
                gameStatus: "ongoing",
                turns: [] as Turn[],
                modalIsOpen: false as boolean,
                winner: undefined,
                playersNumber : action.payload
            } as OngoingGame
        },
        drawCard: (state) => {
            if (state === "idle" || state.gameStatus ==='finished') return state;
            if (state.modalIsOpen) return state;
            // else
            return draw(state);
        },
        playCard: (state, action: PayloadAction<{
            card:Card, botJudgeColor?:Color
        }>) => {
            return handlePlay(state,action)
        },
        judge: (state, action: PayloadAction<Color>) => {
            if (state === "idle" || state.gameStatus ==='finished') return state;
            return {
                ...state,
                requirements: [action.payload],
                currentPlayer: getNextPlayer(
                    state.currentPlayer
                    ,state.hands.length as PlayersNumber
                ),
                modalIsOpen: false
            } as OngoingGame
        },
        exit: (state) => {
            if (state === 'idle') return state
            return 'idle'
        }
    },
});

export const {
    judge,
    start,
    drawCard,
    playCard,
    exit,
} = cardsFlow.actions;

export default cardsFlow.reducer;


