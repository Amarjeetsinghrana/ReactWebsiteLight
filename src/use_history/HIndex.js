import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import HMain from './HMain'

const HIndex = () => {
    return (
        <>
            {/* <h1> Hi i am HIndex page</h1> */}
            <BrowserRouter>
                <HMain />
            </BrowserRouter>

        </>
    );
}
export default HIndex;