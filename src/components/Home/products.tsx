import { graphql, StaticQuery } from 'gatsby'
import React from 'react'
import { Container } from 'react-bootstrap'
import Product from './product'
import Title from './Title'

 const Products =()=> {
 
    return <StaticQuery query={graphql`{product: allContentfulProduct {
        edges {
          node {
            id
            title
            price
            image {
              fluid(maxHeight:426){
                  src
                ...GatsbyContentfulFluid_tracedSVG
              }
            }
          }
        }
      }}`} render={data => {
        return (<section>
          <Container>
            <Title title="Our Products"></Title>
            <div className="row h-100">
              {data.product.edges.map(({ node: product }) => {
                return <Product key={product.id} product={product}></Product>
              })}
            </div>
          </Container>
        </section>
        )
      }}></StaticQuery>
}
export default Products;
