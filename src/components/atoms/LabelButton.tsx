import React, { useState } from 'react';
import styled from 'styled-components'
import styles from './Switch.module.css'

const LabelBlock = styled.div`
    
`
const ClolorBtn = styled.div`
    width:1rem;
    height:1rem;
    background:red;
    display:inline-block;
    border-radius:50%;
    
`
const LabelTitle = styled.div`
    display:inline-block;
    padding-left:0.5rem;
    color:#999795;
    font-size:1.2rem;
`

function Label(){
    
    return(
        <LabelBlock>
                <ClolorBtn/>
                <LabelTitle>Math</LabelTitle>
        </LabelBlock>
        )
}

export default Label