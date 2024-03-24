import React from 'react'
import Navbar from './Navbar';
import TredingSlider from './TredingSlider';
import Popular from './Popular';

const Home = () => {
    return (
        <>
            <div className="main">
                <Navbar />
                <Popular />
                <TredingSlider/>
            </div>

        </>
    )
}

export default Home;