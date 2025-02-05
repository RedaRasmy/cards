import { COLORS } from "../../../Constants/cards";
import { Card, Color } from "../../../types/cards.type";
import { Difficulty } from "../../../types/game.type";
import { mostColorRepeated } from "../utils/mostColorRepeated";

export function botJudge(botCards: Card[], diff: Difficulty):Color {
    // return color
    switch (diff) {
        case "easy": // random : 25% for each
            return COLORS[ Math.floor(Math.random() * 4) ];
        }
    return mostColorRepeated(botCards) || 'red'
}