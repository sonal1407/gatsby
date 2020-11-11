import React from 'react'
import { Button, Container } from 'react-bootstrap';
import { Link } from 'gatsby'

import Title from './Title'

export default function Info() {
    return (
        <Container >
            <Title title="our services" ></Title>
            <div>
                <p className="text-center">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
               </p>
                <Link to="/about" style={{ display: 'flex', justifyContent: 'center' }}>
                    <Button>About</Button>
                </Link>
            </div>
        </Container>
    )
}
