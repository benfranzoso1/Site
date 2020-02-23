import React from "react"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Dealers from "../components/dealers"
import Steps from "../components/steps"
import Why from "../components/why"

import BackgroundImage from "gatsby-background-image"
import Miller from "gatsby-image"
import Jerrdan from "gatsby-image"
import Peterbilt from "gatsby-image"
import Freightliner from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

const IndexPage = (props) => (
    <Layout>
        <section className="hero01">
        <BackgroundImage
              className="background-section"
              fluid={props.data.indexImage.childImageSharp.fluid}
              fadeIn>
          <div className="black-overlay">
              <div className="container">
                  <div className="hero-cta">
                    <span>Equipment-Loans.com</span>
                    <h1>We Work<br/>For You On Demand.</h1>
                     <p className="large"><span className="bold">Headache free</span> financing so you can get back to what<br/> really matters, making money.</p>
                  </div>
                  <div className="heros-dealer">
                      <Miller
                        className="miller-logo"
                        fixed={props.data.miller.childImageSharp.fixed}

                      ></Miller>
                        <Jerrdan
                        className="jerrdan-logo"
                        fixed={props.data.jerrdan.childImageSharp.fixed}

                      ></Jerrdan>
                        <Peterbilt
                        className="peterbilt-logo"
                        fixed={props.data.peterbilt.childImageSharp.fixed}

                      ></Peterbilt>
                        <Freightliner
                        className="jerrdan-logo"
                        fixed={props.data.freightliner.childImageSharp.fixed}

                      ></Freightliner>
                  </div>
              </div>
          </div>
          </BackgroundImage>
        </section>
        <Hero></Hero>
        <Dealers></Dealers>
        <Steps></Steps>
        <Why></Why>
    </Layout>
)

export default IndexPage;
  
export const pageQuery = graphql`
query {
  indexImage: file(relativePath: { eq: "tow1.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 1800, quality: 100) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
  miller: file(relativePath: {eq: "miller.png"}) {
    childImageSharp {
      fixed(pngQuality: 10, pngCompressionSpeed: 10, webpQuality: 10) {
        ...GatsbyImageSharpFixed
      }
    }
  }
  jerrdan: file(relativePath: {eq: "jerrdan.png"}) {
    childImageSharp {
      fixed(pngQuality: 10, pngCompressionSpeed: 10, webpQuality: 10) {
        ...GatsbyImageSharpFixed
      }
    }
  }
  peterbilt: file(relativePath: {eq: "peterbilt.png"}) {
    childImageSharp {
      fixed(pngQuality: 10, pngCompressionSpeed: 10, webpQuality: 10) {
        ...GatsbyImageSharpFixed
      }
    }
  }
  freightliner: file(relativePath: {eq: "freightliner.png"}) {
    childImageSharp {
      fixed(pngQuality: 10, pngCompressionSpeed: 10, webpQuality: 10) {
        ...GatsbyImageSharpFixed
      }
    }
  }

}
`;