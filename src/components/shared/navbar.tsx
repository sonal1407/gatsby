import React, { Component } from 'react'
import { Link } from "gatsby"
import "../layout.css";
import gatsbyicon from "../../images/gatsby-icon.png";
export default class Navbar extends Component {
    state = {
        navbarOpen: false,
        links: [
            {
                id: 1,
                path: '/',
                text: 'Home'
            },
            {
                id: 2,
                path: '/about',
                text: 'About'
            },
            // {
            //     id: 3,
            //     path: '/contact',
            //     text: 'Contact'
            // },
        ]
    }

    render() {
        return (
            <nav className="navbar navbar-default justify-content-between align-items-center">
                <Link to="/">
                    <img className="img" src={gatsbyicon} alt="logo"></img>
                </Link>
                <ul>{this.state.links.map((list) => {
                        return (<li><Link to={list.path}>{list.text}</Link></li>)
                    })}
                </ul>
                <button className="snipcart-checkout">Cart</button>
            </nav>
        )
    }
}
