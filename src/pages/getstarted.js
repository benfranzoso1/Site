import React from "react"
import Form from "../components/Form"


const GetStarted = () => (
    <div>
        <section className="applyIntro">
            <div className="container">
                <h2>Let's Get Started</h2>
            </div>
        </section>
        <section className="apply">
            <div className="container half-grid">
                <Form/>
                <div className="quickfeature">1</div>
            </div>
        </section>
    </div>
)

export default GetStarted