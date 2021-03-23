import react from 'react'
import { useParams } from 'react-router-dom'

const UseParamUser=()=>{
    const {fname , lname}=useParams()
    return(
        <>
            <h1>hello i am {fname} and {lname}</h1>
        </>
    );
}
export default  UseParamUser;   