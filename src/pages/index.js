import React from "react"
import Layout from "../Components/layout"
import VideoModal from "../Components/VideoModal"
import Feature01 from "../Components/feature01"
import Hero from "../Components/hero"
import Steps from "../Components/steps"
import Why from "../Components/why"
import Faq from "../Components/faq"

import BackgroundImage from "gatsby-background-image"
import Miller from "gatsby-image"
import Jerrdan from "gatsby-image"
import Peterbilt from "gatsby-image"
import Freightliner from "gatsby-image"
import Cat from "gatsby-image"
import Mack from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import Form from "../Components/Form"

const IndexPage = props => (
  <Layout>
    <section className="hero01">
      <BackgroundImage
        className="background-section"
        fluid={props.data.indexImage.childImageSharp.fluid}
        fadeIn
      >
        <div className="black-overlay">
          <div className="container">
            <div className="hero-cta">
              <span className="xtrasmall">Equipment-Loans.com</span>
              <h1>
                We Work <span>For You On Demand.</span>
              </h1>
              <p className="large">
                <b className="bold">Headache free</b> financing so you can get
                back to what <span>really matters, making money.</span>
              </p>
              <VideoModal></VideoModal>
            </div>
            <div className="heros-dealer">
              <div className="logos">
                <Miller
                  className="miller-logo"
                  fixed={props.data.miller.childImageSharp.fixed}
                  fadeIn
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
                  className="freightliner-logo"
                  fixed={props.data.freightliner.childImageSharp.fixed}
                ></Freightliner>
                <Cat
                  className="cat-logo"
                  fixed={props.data.cat.childImageSharp.fixed}
                ></Cat>
                <Mack
                  className="mack-logo"
                  fixed={props.data.mack.childImageSharp.fixed}
                ></Mack>
              </div>
            </div>
          </div>
        </div>
      </BackgroundImage>
    </section>
    <Feature01></Feature01>

    <Why></Why>
    <Form.Wrapper>
      <h1>Let's get in touch!</h1>
      <Form />
    </Form.Wrapper>
    <Faq></Faq>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query {
    indexImage: file(relativePath: { eq: "tow1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1800, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    miller: file(relativePath: { eq: "miller.png" }) {
      childImageSharp {
        fixed(
          width: 100
          pngQuality: 10
          pngCompressionSpeed: 10
          webpQuality: 10
        ) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    jerrdan: file(relativePath: { eq: "jerrdan.png" }) {
      childImageSharp {
        fixed(
          width: 90
          pngQuality: 10
          pngCompressionSpeed: 10
          webpQuality: 10
        ) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    peterbilt: file(relativePath: { eq: "peterbilt.png" }) {
      childImageSharp {
        fixed(
          width: 85
          pngQuality: 10
          pngCompressionSpeed: 10
          webpQuality: 10
        ) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    freightliner: file(relativePath: { eq: "freightliner.png" }) {
      childImageSharp {
        fixed(
          width: 92
          pngQuality: 10
          pngCompressionSpeed: 10
          webpQuality: 10
        ) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    cat: file(relativePath: { eq: "CAT.png" }) {
      childImageSharp {
        fixed(
          width: 65
          pngQuality: 10
          pngCompressionSpeed: 10
          webpQuality: 10
        ) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    mack: file(relativePath: { eq: "mack.png" }) {
      childImageSharp {
        fixed(
          width: 100
          pngQuality: 10
          pngCompressionSpeed: 10
          webpQuality: 10
        ) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
