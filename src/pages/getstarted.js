import React from "react"
import Layout from "../components/layout"
import Check from "../assets/checkmark-outline.svg"
import Form from "../components/Form"

const GetStarted = () => (
    <Layout>
        <section className="applyIntro">
            <div className="container">
                <h1 className="center">Let's Get Started</h1>
                <p className="large center">We're eagrly on stand by waiting to here from you. Complete the form below and we will be in touch within 10 Minutues! Yeah, we're fast!</p>
            </div>
        </section>
        <section className="apply">
            <div className="container half-grid">
                <div className="quickfeature">
                    <h2 className="center">Lending Made Easy</h2>
                    <div className="borderbottom"></div>
                    <p className="greyblue">Complete the form, we will be in touch as soon as your done.</p>
                    <div className="quickfeaturelist">
                        <div className="quickfeatureitem">
                            <Check className="check margin"></Check>
                            <h4 className="none">Feature</h4>
                        </div>
                        <div className="quickfeatureitem">
                            <Check className="check margin"></Check>
                            <h4 className="none">Feature</h4>
                        </div>
                        <div className="quickfeatureitem">
                            <Check className="check margin"></Check>
                            <h4 className="none">Feature</h4>
                        </div>
                        <div className="quickfeatureitem">
                            <Check className="check margin"></Check>
                            <h4 className="none">Feature</h4>
                        </div>
                    </div>
                </div>
                <Form/>
            </div>
        </section>
    </Layout>
)

export default GetStarted