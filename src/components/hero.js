import React from "react"
import Arrow from "../assets/arrow-thin-right.svg"

export default () => (
<section className="hero-video">
    <div className="container half-grid">
        <div className="sales-copy">
            <h1>2020 Is Your Year. Slingshot Engaged!</h1>
            <p className="large"><span className="bold">Headache free</span> financing so you can get back to what really matters, making money.</p>
            <a href="https://ben1238.typeform.com/to/PRIyZc" className="btn-large hidden" target="_blank" rel="noopener noreferrer">Get Started <Arrow className="arrow"/></a>
        </div>
        <div className="sales-video">
        <div className="wistia_responsive_padding" style={whistia1}><div className="wistia_responsive_wrapper" style={whistia2}><iframe src="https://fast.wistia.net/embed/iframe/4zcz3rxerf?seo=false&videoFoam=true" title="Hey there, welcome to Wistia! Video" allowtransparency="true" frameborder="0" scrolling="no" className="wistia_embed" name="wistia_embed" allowfullscreen mozallowfullscreen webkitallowfullscreen oallowfullscreen msallowfullscreen width="100%" height="100%"></iframe></div></div>
        <a href="#" className="btn-large margin-top block-style" target="_blank" rel="noopener noreferrer">Get Started <Arrow className="arrow"/></a>
        </div>
    </div>
</section> 
)

const whistia1 = {
    padding: '56.25% 0 0 0',
    position: 'relative'
};

const whistia2 = {
    height: '100%',
    left: '0',
    position: 'absolute',
    top: '0',
    width: '100%'
};
