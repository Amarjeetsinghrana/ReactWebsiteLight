import React from 'react'



const Footer=()=>{

    const year=new Date().getFullYear();
    return(
        <>
            <footer >
                <div className="footer">
                    <p >Copyright ©{year}</p>
                </div>
                
            </footer>
        </>
    );
}
export default Footer;