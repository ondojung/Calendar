import React,{useState,useEffect} from 'react';
import styled from 'styled-components'

const InputMenuBlock=styled.div`
    width:28rem;
    background:white;
    display:inline-block;
    margin-top:2.5rem;
    border-radius:0.8rem;
    overflow:hidden;
    text-align:left;
`
const InputMenu=styled.div`
    background:white;
    width:calc(100% - 2rem);
    height:3rem;
    margin:0 auto;
    border-bottom:0.18rem solid #F3F2F8;
    line-height:3rem;
    padding:0 1rem 0 1rem;
    font-size:1.1rem;
`
const ColorBlock=styled.div`
    width:1.5rem;
    height:1.5rem;
    border-radius:50%;
    background:${(props)=>props.color?props.color:'gray'};
    float:left;
    margin-top:0.75rem;
`
const LabelTitle=styled.div`
    float:left;
    margin-left:0.5rem;
    font-weight:600;
`

function LabelModal({handler}){
    const labelDB=[
        {color:'#28CD41',name:'Family'},
        {color:'#007AFF',name:'Personal'},
        {color:'#FFCC02',name:'School'},
        {color:'#FF3B30',name:'Work'},
        {color:'#1BADF8',name:'South Korea Holidays'}
        ]
    return(
        <>
            <InputMenuBlock>
                {
                    labelDB.map((e)=>
                        <InputMenu onClick={()=>handler(e)}>
                            <ColorBlock color={e.color}/>
                            <LabelTitle>
                                {e.name}
                            </LabelTitle>
                        </InputMenu>
                    )
                }
            </InputMenuBlock>
        </>
        )
}

export default LabelModal