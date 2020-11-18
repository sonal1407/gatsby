import React, { Component } from 'react'
import Title from './Title'
import Image from 'gatsby-image'
import { Button, Row, Container } from 'react-bootstrap';

export default class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: props.dataMenu.edges,
            shoppingItems: props.dataMenu.edges,
            categories: this.getCategory(props.dataMenu.edges)
        }
    }

    getCategory = (category) => {

        let checkCategory = category.map((item) => {
            return item.node.category
        })
        let setCategory = new Set(checkCategory);
        let categories = ['all', ...setCategory];
        return categories;
    }

    renderButton = (category) => {
        let allItems = this.state.items;
        if (category === 'all') {
            this.setState({ shoppingItems: allItems })
        }
        else {
            let filterItem = allItems.filter((node) => node.node.category === category)
            this.setState({ shoppingItems: filterItem })
        }
    }

    render() {
        if (this.state.items.length > 0) {
            return (
                <div>
                    <Container >
                        <Title title="Menu items"></Title>
                        <Row style={{ display: 'flex', justifyContent: 'center' }}>
                            <div >{this.state.categories.map((category, index) => {
                                return (<Button style={{ margin: '10px' }} variant="outline-info" key={index} onClick={() => this.renderButton(category)}>{category}</Button>)
                            })}
                            </div>
                        </Row>

                    </Container>
                    <div className="row">
                        {this.state.shoppingItems.map((item) => {
                            return (
                                <div className="col-6">
                                    <div className="media" style={{background:"#5c656d26"}}>
                                        <Image fixed={item.node.image.fixed} />
                                        <div className="media-body">
                                            <div className="d-flex justify-content-between">
                                                <h5 className="mt-0">{item.node.title}</h5>
                                            </div>
                                            <div>${item.node.price}</div>
                                            <p>{item.node.description.description}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            )
        } else {
            return (<div>{'No Record found'}</div>)
        }
    }
}

//npm install bootstrap jquery @popperjs/core
