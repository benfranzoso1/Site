import React from "react"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Hero01 from "../components/hero01"
import Dealers from "../components/dealers"
import Steps from "../components/steps"
import Why from "../components/why"

export default () => (
    <Layout>
        <Hero01></Hero01>
        <Hero></Hero>
        <Dealers></Dealers>
        <Steps></Steps>
        <Why></Why>
    </Layout>
)
