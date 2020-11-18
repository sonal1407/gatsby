import React from 'react';
import { Card, Button } from 'react-bootstrap';

export default function Product(props) {
    return (
        <div className="col-4">
            <Card className="h-100">
                <Card.Img variant="top" src={props.product.image.fluid.src} />
                <Card.Body className="mt-auto">
                    <h6>{props.product.title}</h6>
                    <h6>Price :${props.product.price}</h6>
                    <Button className="snipcart-add-item"
                        data-item-id={props.product.id}
                        data-item-name={props.product.title}
                        data-item-price={props.product.price}
                        data-item-url="http://localhost:8000"
                        data-item-image={props.product.image.fluid.src}
                        variant="primary">Add to cart</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

