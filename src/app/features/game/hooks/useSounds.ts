import { useAppSelector } from "../Store/store";
import { playSound } from "../utils/playSound";

export default function useSounds() {
    const sound = useAppSelector(state=>state.settings.sound)

    function play(audio:string) {
        if (sound) {
            playSound(audio)
        }
    }

    function playCardSound() {
        if (sound) {
            playSound('/sounds/playCardSound.wav')
        }
    }

    function drawCardSound() {
        if (sound) {
            playSound('/sounds/takeCardSound.wav')
        }
    }

    return {
        play,
        playCardSound,
        drawCardSound
    }
}
