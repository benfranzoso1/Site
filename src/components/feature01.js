import React from "react"
import Arrow from "../assets/arrow-thin-right.svg"
import Credit from "../assets/credit.svg"
import Rates from "../assets/rates.svg"


export default () => (
<section className="feature01">
    <div className="container half-grid">
        <div className="sales-copy">
            <h2>We finance any type of equipment your business needs</h2>
            <p className="large">Headache free  financing so you can get back to what really matters, making money.</p>
            <div className="flexcenter">
            <a href="https://ben1238.typeform.com/to/PRIyZc" className="btn-large" target="_blank" rel="noopener noreferrer">Get Started <Arrow className="arrow"/></a>
            </div>
        </div>
        <div className="bullets">
            <div className="one">
                <span className="feature01icon"><Credit className="crediticon"></Credit></span>
                <h3>No Impact To Credit Score</h3>
            </div>
            <div className="two">
                <span className="feature01icon"><span className="speed">💳</span></span>
                <h3>Unbelivably Fast Funding</h3>
            </div>
            <div className="three">
                <span className="feature01icon"><Rates className="rates"></Rates></span>
                <h3>Competitve Commerical Rates</h3>
            </div>
        </div>
    </div>
</section> 
)

