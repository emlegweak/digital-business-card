import React from "react";
import HeaderImage from "./Components/HeaderImage"
import Nav from "./Components/Nav"
import Main from "./Components/Main"
import Footer from "./Components/Footer"

export default function App(){
    return(
        <div className="body">
            <HeaderImage />
            <Nav />
            <Main />
            <Footer />
        </div>
    )
}