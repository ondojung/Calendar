import React, { useState,useEffect } from 'react';
import styled from 'styled-components'

const TransportBlock = styled.div`
    width:18rem;
    height:5.5rem;
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

const data = {
    mean:'bus',
    O:'집',
    D:'잠실한강공원'
}
function Transport(){
    return (
        <TransportBlock>
            <ArtWorkBlock>
                <ArtWorkImg src='https://image.bugsm.co.kr/album/images/500/202345/20234500.jpg'/>
            </ArtWorkBlock>
            <TitleBlock>세탁소</TitleBlock>
            <ArtistBlock>유라</ArtistBlock>
        </TransportBlock>
        )
}

export default Transport