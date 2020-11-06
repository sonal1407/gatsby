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
                text: 'Cart'
            }
        ]
    }
    onNavbarClick = () => {
        console.log('onNavbarClick');
    }
    render() {
        return (
            <nav class="navbar navbar-default">
                <Link to="/">
                    <img className="img" src={gatsbyicon} alt="logo"></img>
                </Link>
                {/* <button onClick={this.onNavbarClick}>Toggle </button> */}
                <div>
                    <ul class="nav navbar-nav">
                        {
                            this.state.links.map((list) => {
                                return (
                                    <li><Link to={list.path}>{list.text}</Link></li>
                                )
                            })
                        }
                    </ul>
                </div>
            </nav>
        )
    }
}
