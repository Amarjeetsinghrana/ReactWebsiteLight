import React from 'react'

const Spreaddata=()=>{

    // const fulname=["Amar ","jeet"];
    // const biodata=[1,...fulname,"Male"];
    // console.log(fulname);
    // console.log(biodata);

    // var friends=["amar","krishna","mata Rani","akash"];
    // const happyfriends=["amar","krishna","mata Rani","akash"];

    // const add=[...friends,...happyfriends];
    // console.log(add);

    //  var [first,...remaining]=friends;
    //  console.log(first,...remaining);

    const fulName={name:"amar" ,lname:"jeet"};
    const biodata={id:1, ...fulName, gender:"Male"};

    console.log(biodata);

    return(
        <>
            <h1>Hello</h1>
        </>
    );
}
export default Spreaddata;