import React, { useState,useEffect } from 'react';
import styled from 'styled-components'

const MusicPlayerBlock = styled.div`
    width:18rem;
    height:5rem;
    overflow:hidden;
`
const ArtWorkBlock = styled.div`
    height:100%;
    aspect-ratio: 7 / 10;
    background: lightgrey;
    float:left;
    clear: both;
    border-radius:0.2rem;
    overflow:hidden;
`
const ArtWorkImg = styled.img`
    width:100%;
    height:100%;
    object-fit:cover;
`   
const TitleBlock = styled.div`
    padding:0.5rem;
    font-size:1.4rem;
    white-space: nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
`
const ArtistBlock = styled.div`
    padding:0 0.5rem 0 0.5rem;
    font-size:1rem;
    white-space: nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
`


function MusicPlayer({data}){
    return (
        <MusicPlayerBlock>
            <ArtWorkBlock>
                <ArtWorkImg src={`https://image.tmdb.org/t/p/w440_and_h660_face/${data.poster}`}/>
            </ArtWorkBlock>
            <TitleBlock>{data.title}</TitleBlock>
            <ArtistBlock>{data?.overview}</ArtistBlock>
        </MusicPlayerBlock>
        )
}

export default MusicPlayer