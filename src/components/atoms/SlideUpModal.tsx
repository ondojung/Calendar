import styles from './SlideUp.module.css'
import React,{useState,useEffect} from 'react';
import styled from 'styled-components'

const Header = styled.div`
    width:100%;
    padding:0.5rem 0 0.5rem 0;
    background:#FAFAFC;
    overflow:hidden;
    text-align:center;
    font-size:1.2rem;
    font-weight:700;
`
const CancelBtn=styled.div`
    float:left;
    margin-left:0.5rem;
    color:#FE3B29;
`
const AddBtn=styled.div`
    float:right;
    margin-right:0.5rem;
    color:#FE3B29;
`

type SlideProps={
    setModalOpen:any
    isOpen:any
    children:any
    title:string
    bg?:any
}

export default function SlideUp({setModalOpen,isOpen,children,title,bg}:SlideProps){
    const handleClose=()=>{
        setModalOpen(false)
    }
    
      
    return(
        <div className={`${styles.container} ${isOpen?styles.open:styles.closeModal}`} style={{background:bg?bg:'#fff'}}>
        <Header>
             {title}
            <CancelBtn onClick={handleClose}>Cancel</CancelBtn>
            <AddBtn>Add</AddBtn>
        </Header>
           {children}
        </div>
        )
}