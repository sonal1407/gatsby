import { graphql } from "gatsby"
import React from "react"
import Info from "../components/Home/info"


import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundImagePage from "../components/shared/backgroundImage"

const About = (data) => (
  <Layout>
    <SEO title="Home" />
    <BackgroundImagePage
      img={data.data.img.childImageSharp.fluid}
      title={'About us'}
    ></BackgroundImagePage>
    <Info title="Home" route="/"></Info>

  </Layout>
)

// If you don’t want to use the blur-up effect, choose the fragment with noBase64 at the end. 
// If you want to use the traced placeholder SVGs, choose the fragment with tracedSVG at the end.
export const query = graphql`{
  img:file(relativePath:{eq:"aboutus.jpeg"}){ 
    childImageSharp{
      fluid{
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}`


export default About
