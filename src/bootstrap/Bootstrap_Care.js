import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

const Bootstrap_Care = () => {

    return (
        <>
            <h1 className="text-danger">Hello Amar</h1>
            <div className="card" style={{width:"18rem"}}>
                <img src="https://picsum.photos/id/237/200/300" className="card-img-top" alt="pic" />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="https://www.netflix.com/in/title/80100172" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </>
    );
}
export default Bootstrap_Care;