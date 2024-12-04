import React, { useState,useEffect } from 'react';
import styled from 'styled-components'

const PhotoBlock = styled.div`
    width:4rem;
    height:4rem;
    border:0.1rem solid black;
    border-radius:0.5rem;
    overflow:hidden;
    float:left;
`
const PhotoImg = styled.img`
    width:100%;
    height:100%;
    object-fit:cover;
`


function Photoes(){
    return (
            <PhotoBlock>
                <PhotoImg src='https://i.pinimg.com/736x/5b/e2/c6/5be2c6d011976118a1b24579a0cdfc45.jpg'/>
            </PhotoBlock>
        )
}

export default Photoes