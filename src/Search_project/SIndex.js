import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import SMain from './SMain'

const SIndex = () => {
    return (
        <>


            <BrowserRouter>
                <SMain />
            </BrowserRouter>
        </>
    );
}
export default SIndex;