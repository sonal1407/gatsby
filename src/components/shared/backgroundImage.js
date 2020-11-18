import React from 'react'
import BackgroundImage from "gatsby-background-image";

export default function BackgroundImagePage({
    img, title, children
}) {
    return (
        <div  >
            <BackgroundImage
                className="vh-100 d-flex align-items-center justify-content-center"
                Tag={`section`}
                id={`media-test`}
                fluid={img}
            >
                <h1 className="m-0">{title}</h1>
                {children}
            </BackgroundImage>
        </div>
    )
}