import React from "react"
import PropTypes from "prop-types"

import "./layout.css"
import Navbar from "./shared/navbar"
import Footer from "./shared/footer"


const Layout = ({ children }) => {
  return (<>
    <Navbar />
    {children}
    <Footer></Footer>
  </>)
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
// npm install react-bootstrap bootstrap