import { useState, useEffect } from 'react'
import logo from "../../assets/homepagelogo.png"

export const Typewriter = ({ text, typingSpeed }) => {

    const [displayText, setDisplayText] = useState('')
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const typingInterval = setInterval(() => {
            if (currentIndex < text.length) {
                setDisplayText((prevText) => prevText + text[currentIndex])
                setCurrentIndex((prevIndex) => prevIndex + 1)
            } else {
                clearInterval(typingInterval);
            }
        }, typingSpeed);
        return () => clearInterval(typingInterval);
    }, [currentIndex, text, typingSpeed]);


    return (<>
        <div
            className='typewriter-container'>
            <img src={logo} alt='homepage logo' />
            <div
                className='typewriter-text'>
                {displayText}
            </div>
        </div>

    </>)
}