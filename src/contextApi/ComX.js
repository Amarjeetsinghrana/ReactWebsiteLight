import React, { createContext } from 'react'
import ComY from './ComY'

const MiddleName=createContext();
const LastName=createContext();
const ComX=()=>{
    return(
        <>
        
           <MiddleName.Provider value="jeet">
          <LastName.Provider value="Singh">
          <ComY />
          </LastName.Provider>
           </MiddleName.Provider>
        </>
    );
}
export default ComX;
export {MiddleName,LastName};