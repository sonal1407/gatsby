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
// clling the details for
// get the file to load
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
