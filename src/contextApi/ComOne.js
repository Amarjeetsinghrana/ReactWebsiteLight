import react, { createContext } from 'react'
import ComTwo from './ComTwo';

const firstName=createContext();
const lastName=createContext();

const ComOne=()=>{
    return(<>
      <firstName.Provider value="jeet">
          <lastName.Provider value="Singh">
          <ComTwo />
          </lastName.Provider>
      </firstName.Provider>
    </>);
}
export default ComOne;
export {firstName,lastName}