import { setDark, toggleDark, toggleSound } from "../Store/slices/settings";
import { useAppDispatch, useAppSelector } from "../Store/store";


export default function useSettings() {
    const dispatch  = useAppDispatch()
    const isDark = useAppSelector(state=>state.settings.darkMode)

    function setDarkMode(dark:boolean) {
        dispatch(setDark(dark))
    }
    function toggleDarkMode() {
        dispatch(toggleDark())
    }

    function handleToggleSound () {
        dispatch(toggleSound())
    }

    return {
        isDark,
        setDarkMode,
        toggleDarkMode,
        handleToggleSound
    }
}

