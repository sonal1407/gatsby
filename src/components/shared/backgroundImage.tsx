import React from 'react'
import BackgroundImage from "gatsby-background-image";

const BackgroundImagePage = (props) => {
    return (
        <div  >
            <BackgroundImage
                className="vh-100 d-flex align-items-center justify-content-center"
                Tag={`section`}
                id={`media-test`}
                fluid={props.img}
            >
                <h1 className="m-0">{props.title}</h1>
                {props.children}
            </BackgroundImage>
        </div>
    )
}
export default BackgroundImagePage;