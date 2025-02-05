import {  useCallback, useEffect } from "react";
import bot from "../logic/bot";

import { useAppSelector } from "../../../Store/store";
import { selectCardsFlow } from "../../../Store/selectors";
import useCard from "../../../hooks/useCard";
import { PlayerId } from "../../../types/players.type";
import getDelay from "../utils/getDelay";
import { botJudge } from "../logic/botJudge";


export default function useBot() {
    // const dispatch = useAppDispatch();
    const diff = useAppSelector(state=>state.gameOptions.difficulty)
    const {
        gameStatus,
        hands,
        requirements,
        playersNumber,
        currentPlayer
    } = useAppSelector(selectCardsFlow) ?? {undefined}


    const {play,draw} = useCard()



    const botPlay = useCallback(( botId: Exclude<PlayerId,0>) => {
        if (gameStatus === 'finished' 
            || !hands 
            || !requirements 
            || !playersNumber 
            || !currentPlayer
        ) return;
        // get card 
        const cardToPlay = bot(
            hands[botId],
            requirements,
            diff,
            hands[0].length,
            playersNumber
        )
        if (cardToPlay) {
            // play it if exist
            if (cardToPlay.value === 'Judge') {
                play(cardToPlay,botJudge(
                    hands[currentPlayer],
                    diff
                ))
            } else {
                play(cardToPlay)
            }
        } else {
            // draw card if not
            draw()
        }
    },[
        currentPlayer,gameStatus,hands,diff,draw,play,playersNumber,requirements
    ])


    useEffect(() => {
        if (gameStatus ==='finished'
            || currentPlayer === undefined
        ) return;

        if (currentPlayer !== 0) {
            const delay = getDelay()
            setTimeout(() => {
                botPlay(currentPlayer as Exclude<PlayerId,0>);
            },delay);
        }
    }, [currentPlayer,gameStatus,botPlay]);

}

