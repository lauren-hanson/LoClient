import "./Animation.css"


export const Animation = () => {

    const spanStyles = [
        { '--i': 1 },
        { '--i': 3 },
        { '--i': 16 },
        { '--i': 5 },
        { '--i': 13 },
        { '--i': 20 },
        { '--i': 6 },
        { '--i': 7 },
        { '--i': 10 },
        { '--i': 8 },
        { '--i': 17 },
    ];

    return (<>
        <div className="container">
            <div className="camera_container">
                <div className="camera">
                    <div className="shutter"> </div>
                    <div className="lens"></div>
                </div>

            </div>
            <div className="laptop_container">
                <div className="laptop_screen"></div>
                <div className="keyboard">
                    <div className="row">

                        {/* <div className="key"></div>
                            <div className="key"></div>
                            <div className="key"></div>
                            <div className="key"></div>
                            <div className="key"></div>
                            <div className="key"></div>
                            <div className="key"></div>
                            <div className="key"></div>
                            <div className="key"></div>
                            <div className="key"></div> */}
                    </div>
                </div>
            </div>
            <div className='cup_container'>
                <div className="plate">

                </div>
                <div className='cup'>
                    <div className="top">
                        <div className="vapour">
                            {spanStyles.map((style, index) => {
                                <span key={index} style={style}></span>
                            })}
                            {/* <span style="--i:1;"></span>
                                <span style="--i:3;"></span>
                                <span style="--i:16;"></span>
                                <span style="--i:5;"></span>
                                <span style="--i:13;"></span>
                                <span style="--i:20;"></span>
                                <span style="--i:6;"></span>
                                <span style="--i:7;"></span>
                                <span style="--i:10;"></span>
                                <span style="--i:8;"></span>
                                <span style="--i:17;"></span> */}

                        </div>
                        <div className="circle">
                            <div className="coffee">

                            </div>
                        </div>
                    </div>
                    <div className="handle">

                    </div>
                </div>
            </div>

        </div>
    </>)
}