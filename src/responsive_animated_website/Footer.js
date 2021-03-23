import React from 'react'

const Footer=()=>{
    const date= new Date().getFullYear();
    return(
        <>
            <footer className="w-100 bg-light text-center">
            <p>  © {date} amar.com All right reserved | Terms and condition</p>

            </footer>
        </>
    );
}
export default Footer;