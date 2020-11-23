import React from 'react'
import { Button } from 'react-bootstrap'
import Title from '../components/Home/Title'

 const Contact =()=> {
    return (
        <div>
            <Title title={'Contact us'}></Title>
            <form>
                <br></br>
                <input type="text" name="name" placeholder="Name"></input>
                <br></br>
                <br></br>
                <input type="email" name="email" placeholder="Email"></input>
                <br></br>
                <br></br>
                <textarea name="description" placeholder="Description"></textarea>
                <br></br>
                <br></br>
                <Button type="submit">Submit</Button>
            </form>
        </div>
    )
}
export default Contact;