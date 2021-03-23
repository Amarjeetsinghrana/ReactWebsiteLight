import React from 'react'
import { MiddleName } from './ComX'
import ComY from './ComY'
import { LastName } from './ComX';

const ComZ = () => {
    return (
        <>
            <MiddleName.Consumer>
                {(fname) => {
                    return (
                        <LastName.Consumer>
                            {(lname) => {
                                return <h1>from ComZ {fname} {lname}</h1>
                            }}
                        </LastName.Consumer>
                    );
                }}
            </MiddleName.Consumer>
        </>
    );
}
export default ComZ;