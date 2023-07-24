import React from "react";
import '../styles/LandingPageFooter.css'
import nintendo from '../assets/img/nintengo-logo.png'
import playstation from '../assets/img/Playstation-Logo.png'
import steam from '../assets/img/steam-logo.png'
import blizzard from '../assets/img/blizzard-logo.png'
import xbox from '../assets/img/xbox-logo.png'
import microsoft from '../assets/img/microsoft-logo.png'

const LandingPageFooter = () => {
    return(
        <>
        <footer>
                <ul>
                    <li>
                        <div class="logo-container">
                            <img src={nintendo} alt="nintendo"/>
                        </div>  
                    </li>
                    <li>
                        <div class="logo-container">
                            <img src={playstation} alt="Playstation"/>
                        </div>
                    </li>
                    <li>
                        <div class="logo-container">
                            <img src={steam} alt="Steam"/>
                        </div>
                    </li>
                    <li>
                        <div class="logo-container">
                            <img src={blizzard} alt="Blizzard"/>
                        </div>
                    </li>
                    <li>
                        <div class="logo-container">
                            <img src={xbox} alt="Xbox"/>
                        </div>
                    </li>
                    <li>
                        <div class="logo-container">
                            <img src={microsoft} alt="microsoft"/>
                        </div>
                    </li>
                </ul>
            </footer>
        </>
    )
}

export default LandingPageFooter