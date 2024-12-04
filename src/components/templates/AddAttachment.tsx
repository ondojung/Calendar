import React, { useState } from 'react';
import styled from 'styled-components'
import Switch from '../atoms/Switch'
import DateButton from '../atoms/DateButton'
import LabelButton from '../atoms/LabelButton'
import SlideUp from '../atoms/SlideUpModal'
import MusicSearch from '../organisms/MusicSearch'
import MovieSearch from '../organisms/MovieSearch' 

const Container=styled.div`
    background:#F3F2F8;
    width:100vw;
    height:100vh;
    overflow:schroll;
    position:absolute;
    top:0;
    left:0;
    z-index:200;
    text-align:center;
`
const InputText=styled.div`
    background:white;
    width:28rem;
    height:3rem;
    margin:0 auto;
    margin-top:1rem;
    border-radius:0.8rem;
    text-align:left;
    
`
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
const Input=styled.input`
    width:100%;
    background:transparent;
    height:100%;
    border:none;
    box-sizing:border-box;
    outline: none;
    font-size:1.1rem;
    padding:0 1rem 0 1rem;
`
const SwitchBlock = styled.div`
    display:inline-block;
    float:right;
`
const DateInputBlock = styled.div`
    display:inline-block;
    float:right;
`
const LabelBlock=styled.div`
    display:inline-block;
    float:right;
`
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
const AttachValue=styled.div`
    float:right;
    margin-right:0.5rem;
    color:gray;
    white-space:nowrap;
    max-width:8rem;
    overflow:hidden;
    text-overflow: ellipsis;
`

function AddAttachment({setAddAttachment,handler}){
    
    const [musicModalOpen,setMusicModalOpen] = useState(false)
    const [movieModalOpen,setMovieModalOpen] = useState(false)
    const [data,setData]=useState(null)
    
    return(
        <Container>
            <Header>
                Add attachment
                <CancelBtn onClick={()=>setAddAttachment(false)}>Cancel</CancelBtn>
                <AddBtn onClick={()=>handler(data)}>Add</AddBtn>
            </Header>
            
            <InputMenuBlock>
                <label htmlFor='photo'>
                <InputMenu>
                    Photo
                </InputMenu>
                </label>
                <label htmlFor='file'>
                <InputMenu>
                    File
                </InputMenu>
                </label>
                <InputMenu onClick={()=>setMusicModalOpen(true)}>
                    Music
                    <AttachValue>{data?.type==2?`${data?.data.artists}-${data?.data.title}`:null}</AttachValue>
                </InputMenu>
                <InputMenu onClick={()=>setMovieModalOpen(true)}>
                    Movie
                    <AttachValue>{data?.type==3?`${data?.data.title}`:null}</AttachValue>
                </InputMenu>
            </InputMenuBlock>
            
        <input type="file" id='photo' name="myImage" accept="image/*" style={{display:'none'}} />
        <input type="file" id='file' name="myFile"  style={{display:'none'}} />
        <SlideUp 
            setModalOpen={setMusicModalOpen}
            isOpen={musicModalOpen}
            children={<MusicSearch 
            handler={(value)=>{
                    setData({type:2,data:value})
                    setMusicModalOpen(false)
                }    
            }/>}
            title='Music'/>
            <SlideUp 
            setModalOpen={setMovieModalOpen}
            isOpen={movieModalOpen}
            children={<MovieSearch 
            handler={(value)=>{
                setData({type:3,data:value})
                setMovieModalOpen(false)
            }}/>}
            title='Movie'/>
        </Container>
        )
}
export default AddAttachment
/*
0:Photo
1:File
2:Music
3:Movie
*/