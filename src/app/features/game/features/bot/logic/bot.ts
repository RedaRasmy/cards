import getPlayableCards from "../utils/getPlayableCards";

import easyBot from "./easyBot";
import mediumBot from "./mediumBot";
import hardBot from "./hardBot";
import { Card, Requirements } from "../../../types/cards.type";
import { Difficulty } from "../../../types/game.type";
import { PlayersNumber } from "../../../types/players.type";

/**
 * @param {Card[]} cards - bot cards.
 * @param {Requirements} requ - The requirements of the current card in the board.
 * @param {Difficulty} diff - The game difficulty (easy,medium,...).
 * @param {number} PCN - Player's Cards Number
 * @returns {Card|undefined} The card to play or undifined (draw card).
 */

export default function bot(
    cards: Card[],
    requ: Requirements,
    diff: Difficulty,
    PCN: number,
    playersNumber:PlayersNumber
): Card | undefined {
    ////////////////////////////////////////////////////////////////////////////
    const playableCards: Card[] = getPlayableCards(cards,requ)
    if (playableCards.length === 0) return;
    ///
    switch (diff) {

        case "easy":
            return easyBot(playableCards)

        case "medium":
            return mediumBot(playableCards,cards)

        case "hard":
            return hardBot(
                playableCards,
                cards,
                playersNumber,
                PCN,
                requ
            )
    }
}





export function minColor(colors: string[]) {
    const colorsExist: string[] = [];
    const counts: number[] = [];
    for (const color of colors) {
        if (!colorsExist.includes(color)) {
            colorsExist.push(color);
            const count = colors.filter((clr) => clr === color).length;
            counts.push(count);
        }
    }
    const minCount = Math.min(...counts);
    const index = counts.findIndex((value) => value === minCount);
    return colorsExist[index];
}


