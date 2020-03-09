import React from "react"
import Arrow from "../assets/arrow-thin-right.svg"
export default () => (
<section className="steps">
    <div className="container">
        <h2 className="center">It's Really Easy...</h2>
        <p className="medium center">A simple 3 step process. Apply, send us sales order then we will handle the rest.</p>
        <div className="third-grid">
            <div className="step1">
                <span className="step">1</span>
                <h3>Apply</h3>
                <p>Complete our application by clicking here. It takets no more then two minutes. </p>
            </div>
            <div className="step2">
                <span className="step">2</span>
                <h3>Approve</h3>
                <p>Complete our application by clicking here. It takets no more then two minutes. </p>
            </div>
            <div className="step3">
                <span className="step">3</span>
                <h3>Fund</h3>
                <p>Complete our application by clicking here. It takets no more then two minutes. </p>
            </div>
        </div>
        <div className="flexcenter">
        <a href="#" className="btn-large" target="_blank" rel="noopener noreferrer">Get Started <Arrow className="arrow"/>
        </a>
        </div>
    </div>
</section> 
)
