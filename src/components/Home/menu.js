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
                        {/* <Row style={{ display: 'flex', justifyContent: 'center' }}>
                            <h1> Our items</h1>
                        </Row> */}
                    </Container>
                    {this.state.shoppingItems.map((item) => {
                        return <div id="" className="searchResult">
                            <div className="resultIcon">
                                <Image fixed={item.node.image.fixed} />
                            </div>
                            <div className="optionText">
                                <div>{item.node.title} </div>
                                <div>{item.node.description.description} </div>
                                <div>{item.node.price} </div>
                            </div>
                        </div>
                    })}
                </div>
            )
        } else {
            return (<div>{'No Record found'}</div>)
        }
    }
}

//npm install bootstrap jquery @popperjs/core