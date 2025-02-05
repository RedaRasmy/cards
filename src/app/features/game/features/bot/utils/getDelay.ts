import { TIMER } from "../../../Constants/gameOptions";


export default function getDelay() {
    const rarity = Math.random() < 0.01;
    return Math.random() * (rarity ? TIMER-1500 : TIMER-8000) + TIMER/10;
}
