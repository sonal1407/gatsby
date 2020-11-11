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
            {
                id: 3,
                path: '/contact',
                text: 'Contact'
            },

        ]
    }

    render() {
        return (
            <nav class="navbar navbar-default">
                <Link to="/">
                    <img className="img" src={gatsbyicon} alt="logo"></img>
                </Link>
                <div>
                    <ul>
                        {
                            this.state.links.map((list) => {
                                return (
                                    <li><Link to={list.path}>{list.text}</Link></li>
                                )
                            })
                        }
                        <li>
                            <div className="snipcart-checkout">
                                Cart
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
