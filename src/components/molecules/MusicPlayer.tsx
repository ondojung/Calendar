import React, { useState,useEffect } from 'react';
import styled from 'styled-components'

const MusicPlayerBlock = styled.div`
    width:15rem;
    height:3.5rem;
    border:0.1rem solid black;
    border-radius:0.5rem;
    overflow:hidden;
`
const ArtWorkBlock = styled.div`
    height:100%;
    aspect-ratio: 1 / 1;
    background: lightgrey;
    float:left;
    clear: both;
`
const ArtWorkImg = styled.img`
    width:100%;
    height:100%;
`   
const TitleBlock = styled.div`
    padding:0.2rem;
    font-size:1.1rem;
    white-space: nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
`
const ArtistBlock = styled.div`
    padding:0 0.2rem 0 0.2rem;
    font-size:1rem;
    white-space: nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
`


function MusicPlayer({data}){
    
    return (
        <MusicPlayerBlock>
            <ArtWorkBlock>
                <ArtWorkImg src={data?.thumnail}/>
            </ArtWorkBlock>
            <TitleBlock>{data?.title}</TitleBlock>
            <ArtistBlock>{data?.artists}</ArtistBlock>
        </MusicPlayerBlock>
        )
}

export default MusicPlayer