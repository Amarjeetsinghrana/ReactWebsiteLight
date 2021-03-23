import react, { useContext } from 'react'
import { firstName, lastName } from './ComOne';


const ComThree=()=>{
    const fname=useContext(firstName);
const lname=useContext(lastName);
    return(<>
            <h1>{fname} {lname}</h1>
    </>);
}
export default ComThree;