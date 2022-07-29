import React from "react";

export default function Nav(){
    return(
        <nav>
            <h1>Emily Armstrong</h1>
            <h3>Fullstack Developer</h3>
            <h5><a href="https://emilyarmstrong.me" target="_blank" rel="noreferrer">emilyarmstrong.me</a></h5>
            <div className="buttons">
                <a href="mailto:emilythearmstrong@gmail.com?subject=Professional Inquiry" target="_blank" rel="noreferrer" className="email"><img className="button-img" src="img/email-icon.png" alt="email icon" />Email</a>
                <a href="https://linkedin.com/in/emlegweak" target="_blank" rel="noreferrer" className="linkedin"> <img className="button-img" src="img/linkedin-icon.png" alt="linkedin icon" />Linkedin</a>
            </div>
        </nav>
    )
}