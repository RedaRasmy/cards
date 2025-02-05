import {  Fullscreen } from 'lucide-react'


export default function FullScreenToggle() {
    function toggleFullScreen() {
        if (document.fullscreenElement) {
            document.exitFullscreen()
        } else {
            document.body.requestFullscreen()
        }
        
    }
    return (
        <Fullscreen 
        onClick={toggleFullScreen}
        size={40} 
        className='cursor-pointer dark:text-white' 
        />
    )
}
