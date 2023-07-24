import React from "react";
import Header from '../components/LandingPageHeader'
import Main from "../components/LandingPageBody";
import Footer from '../components/LandingPageFooter'
import '../styles/LandingPage.css'

const LandingPage = () => {
    return(
        <>
            <section className="grid-container">
                <div class="container-fluid container">
                    <Header/>
                    <Main/>
                    <Footer/>
                    
                </div>
            </section>
        </>
    )
}

export default LandingPage