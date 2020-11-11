import React from 'react'
import BackgroundImage from "gatsby-background-image";

export default function BackgroundImagePage({
    img, title, children
}) {
    return (
        <div  >
            <BackgroundImage
                Tag={`section`}
                id={`media-test`}
                fluid={img}
            >
                <h1 style={{height:'200px',textAlign:'center'}}>{title}</h1>
                {children}
            </BackgroundImage>
        </div>
    )
}