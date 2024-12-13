import React from "react";
import "./Home.css"

const Home =()=>{
    return(
        <>
        <div className="home d-flex justify-content-center align-items-center">
            <div className="container d-flex justify-content-center align-items-center flex-column">
                <h1 className="text-center">
                    Organise your<br/>
                    work and life,finally.
                    </h1>
                    <p>Become focused,organised, and calm with <br/> ToDo app. The worlds #No.1 task manager app.</p>
                    <button className="home-todo-btn p-2">Make ToDo List</button>
            </div>
            
        </div>
        </>
    )
}

export default Home;