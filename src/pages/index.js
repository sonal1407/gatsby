import { graphql } from "gatsby"
import React from "react"
import { Carousel } from "react-bootstrap"
import Info from "../components/Home/info"
import Menu from "../components/Home/Menu"
import Products from "../components/Home/products"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundImagePage from "../components/shared/backgroundImage"

const IndexPage = (data) => (
  <Layout>
    <SEO title="Home" />
    <BackgroundImagePage
      img={data.data.img.childImageSharp.fluid}
      title={'Gatsby.js example'}
    ></BackgroundImagePage>
     <Info title="About us" route="/about" />
    <Menu dataMenu={data.data.menu} />

    <Products></Products>
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
  menu: allContentfulShoppingItem {
    edges {
      node {
        id
        title
        category
        description {
          description
        }
        price
        image {
          fixed(height:50,width:50){
            ...GatsbyContentfulFixed_tracedSVG
          }
        }
      }
    }
  }
}`

export default IndexPage
