
import { exit, start } from '../Store/slices/cardsFlow'
import { changeDifficulty, changePlayersNumber } from '../Store/slices/gameOptions'
import { useAppDispatch, useAppSelector } from '../Store/store'
import { Difficulty } from '../types/game.type'
import { PlayersNumber } from '../types/players.type'

export default function useGameOptions() {
    const dispatch = useAppDispatch()
    const {
        playersNumber,
        difficulty
    } = useAppSelector(state=>state.gameOptions)

    function onChangeDifficulty(difficulty:Difficulty) {
        dispatch(changeDifficulty(difficulty))
    }

    function onChangePlayersNumber(playersNumber:PlayersNumber) {
        dispatch(changePlayersNumber(playersNumber))
    }

    function startGame() {
        dispatch(start(playersNumber))
    }

    function restartGame() {
        dispatch(exit())
        dispatch(start(playersNumber))
    }

    function exitGame() {
        dispatch(exit())
    }

    return {
        difficulty,
        playersNumber,
        onChangeDifficulty,
        onChangePlayersNumber,
        startGame,
        exitGame,
        restartGame
    }
}
