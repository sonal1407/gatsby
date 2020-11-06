import { graphql } from "gatsby"
import React from "react"
import Info from "../components/Home/info"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundImagePage from "../components/shared/backgroundImage"

const IndexPage = (data) => (
  <Layout>
    <SEO title="Home" />
    <BackgroundImagePage
      img={data.data.img.childImageSharp.fluid}
      title={'Gatsby'}
    ></BackgroundImagePage>

    <Info></Info>
  </Layout>
)
// clling the details for
// get the file to load
export const query = graphql`{
  img:file(relativePath:{eq:"backgroundImage.jpg"}){ 
    childImageSharp{
      fluid{
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}`


export default IndexPage
