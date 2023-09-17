import "./Work.css"

export const Work = () => {

    return (<>
        <div className='workContainer'>
            <h3>My Work</h3>
            <label class="switch">
                <input type="checkbox"/>
                    <span class="slider"></span>
            </label>

            <div className='myWork'>

                <div className='workTiles'>ArtBex</div>
                <div className='workTiles'>Megan</div>
                <div className='workTiles'>Mark</div>
                <div className='workTiles'>Roam</div>
                <div className='workTiles'>Fatback Studio</div>
                <div className='workTiles'>Reserved</div>
                <div className='workTiles'></div>
                <div className='workTiles'></div>
            </div>
        </div>

    </>)
}