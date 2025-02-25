import React from "react";
import {Link}  from "react-router-dom"

function Home() {
    return (
        <div className="container text-center mt-5">
            <h1 className="display-4">Welcome to MSK Portfolio</h1>
            <p className="lead">I build high-quality websites & web applications</p>
            <Link to={"/projects"} className="btn btn-primary">View My Work</Link>
        </div>
    );
}

export default Home;
