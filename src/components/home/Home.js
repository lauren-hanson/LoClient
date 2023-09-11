import { HomeReel } from "./HomeReel"

import "./Home.css"
import { Typewriter } from "./Typewriter"
import { Work } from "../work/Work"

export const Home = () => {


    return (
        <>
            <div className="homePage">
                {/* <div className="homePageImage">

                    <p class="centered">neque ornare aenean</p>
                </div> */}
              
                <Typewriter text="Web Developer & Photographer" typingSpeed={100}/> 
                <Work /> 


                {/* <div className="paragraph">
                    <p >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sem et tortor consequat id porta. Imperdiet proin fermentum leo vel orci porta non pulvinar. Dictum non consectetur a erat nam at lectus urna. Est velit egestas dui id ornare arcu odio.
                    </p>
                </div> */}
                {/* <div>
                    <HomeReel />
                </div> */}
            </div >
        </>
    )
}