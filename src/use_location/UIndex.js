import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import UMain from './UMain'

const UIndex = () => {
    return (
        <>
            {/* <h1> Hi i am UIndex page</h1> */}
            <BrowserRouter>
                <UMain />
            </BrowserRouter>

        </>
    );
}
export default UIndex;