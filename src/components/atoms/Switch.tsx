import React, { useState } from 'react';
import styled from 'styled-components'
import styles from './Switch.module.css'

const SwitchBlock = styled.div`
    width:3.6rem;
    height:2.2rem;
    border-radius:1.2rem;
    margin-top:0.4rem;
`
const SwichButton=styled.div`
    width:1.8rem;
    height:1.8rem;
    background:white;
    border-radius:50%;
    margin-top:0.2rem;
    margin-right:0.2rem;
    margin-left:0.2rem;
    display:inline-block;
`

function Switch({handler}){
    const [isOn,setOn] = useState(false)
    return(
        <SwitchBlock onClick={()=>{
            handler(!isOn)
            setOn(prev=>!prev)
        }} className={isOn?styles.switchBgOn:styles.switchBgOff}>
            <SwichButton className={isOn?styles.switchOn:null}></SwichButton>
        </SwitchBlock>
        )
}

export default Switch