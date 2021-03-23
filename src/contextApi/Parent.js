import React, { createContext } from 'react'
import ComA from './ComA'

const FirstName = createContext();
const LastName = createContext();
const Parent = () => {

    return (
        <>
            <FirstName.Provider value="Amar jeet">
                <LastName.Provider value="Rana">
                    <ComA />
                </LastName.Provider>
            </FirstName.Provider>
        </>
    );
}
export default Parent;
export { FirstName, LastName };