import { useCallback } from "react";
import { selectCurrentPlayer, selectRequirements } from "../Store/selectors";
import { judge, drawCard, playCard } from "../Store/slices/cardsFlow";
import { useAppDispatch, useAppSelector } from "../Store/store";
import { Card, Color, Requirements } from "../types/cards.type";
import isPlayable from "../utils/isPlayable";
import useSounds from "./useSounds";

export default function useCard() {
    const dispatch = useAppDispatch();
    const requirements = useAppSelector(selectRequirements);
    const currentPlayer = useAppSelector(selectCurrentPlayer);
    const { drawCardSound, playCardSound } = useSounds();

    const play = useCallback((card: Card, botJudgeColor?: Color) => {
        if (requirements && isPlayable(card, requirements as Requirements)) {
            playCardSound();
            dispatch(playCard({ card, botJudgeColor }));
        }
    }, [requirements, playCardSound, dispatch]);

    const draw = useCallback(() => {
        drawCardSound();
        dispatch(drawCard());
    }, [drawCardSound, dispatch]);

    const chooseColor = useCallback((color: Color) => {
        dispatch(judge(color));
    }, [dispatch]);


    function playerPlayCard (card:Card) {
        if (currentPlayer === 0) {
            play(card)
        }
    }
    return {
        play,
        draw,
        chooseColor,
        playerPlayCard,
    };
}
