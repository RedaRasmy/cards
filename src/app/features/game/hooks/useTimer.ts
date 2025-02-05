import { useEffect, useRef } from "react";
import {  selectCurrentCard, selectCurrentPlayer, selectGameStatus, selectModal } from "../Store/selectors";
import { useAppDispatch, useAppSelector } from "../Store/store";
import { TIMER } from "../Constants/gameOptions";
import { drawCard, judge } from "../Store/slices/cardsFlow";
import getRequirements from "../utils/getRequirements";

export default function useTimer() {

    const dispatch = useAppDispatch()

    // const state = useAppSelector(selectCardsFlow)
    const currentPlayer = useAppSelector(selectCurrentPlayer)
    const currentCard = useAppSelector(selectCurrentCard)
    const modalIsOpen = useAppSelector(selectModal)
    const gameStatus = useAppSelector(selectGameStatus)

    const currentCardRef = useRef(currentCard)
    const modalIsOpenRef = useRef(modalIsOpen)

    useEffect(()=>{
        currentCardRef.current = currentCard
    },[currentCard])

    useEffect(()=>{
        modalIsOpenRef.current = modalIsOpen
    },[modalIsOpen])

    useEffect(()=>{
        if (gameStatus === 'finished') return ;

        const timer = setTimeout(() => {
            if (modalIsOpenRef.current && currentCardRef.current) {
                const requirements = getRequirements(currentCardRef.current)
                dispatch(judge(requirements[0]))
            } else {
                dispatch(drawCard())
            }
        }, TIMER);
        return () => clearTimeout(timer)
    },[
        // dependencies
        currentPlayer,
        dispatch,
        gameStatus
    ])
}
