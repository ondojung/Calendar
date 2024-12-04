import React,{useState,useEffect} from 'react';
import styled from 'styled-components'
import axios from 'axios'

const InputText=styled.div`
    background:#EEEEEF;
    width:28rem;
    height:3rem;
    margin:0 auto;
    margin-top:1rem;
    border-radius:1rem;
    text-align:left;
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
    color:#838388;
`
const TrackBlock=styled.div`
    width:28rem;
    margin:0 auto;
    overflow:hidden;
    text-align:left;
    padding:0.5rem 0 0.5rem 0;
    border-bottom:0.1rem solid #ECECEC;
`
const Thumnail = styled.div`
    width:4rem;
    height:4rem;
    border-radius:0.4rem;
    float:left;
`
const ThumnailImg=styled.img`
    width:100%;
    height:100%;
    object-fit:cover;
`
const MusicInfo=styled.div`
    float:left;
    overflow:hidden;
    margin-left:1rem;
    margin-top:0.5rem;
`
const Title=styled.div`
    font-size:1.2rem;
`
const Artist=styled.div`
    font-size:1rem;
`

function MisicSearch({handler}){
    const [keyword,setKeyword]=useState('')
    const [musicDB,setMusicDB]=useState([])
    const onChange=(e)=>{
        setKeyword(e.target.value)
    }
    const searchMusic=async(e)=>{
        if(e.key === "Enter") {
            const req=await axios.get('/music/search?q='+keyword,{
                headers: {
                    "Content-Type": "application/json"
                }
            })
            setMusicDB(req.data)
        }
    }
    return(
        <>
            <InputText>
                <Input type='search' placeHolder='Title' onChange={onChange} onKeyDown={searchMusic}></Input>
            </InputText>
            <div>
            {
                musicDB.map(e=>
                    <TrackBlock onClick={()=>handler(e)}>
                        <Thumnail>
                            <ThumnailImg src={e.thumnail}/>
                        </Thumnail>
                        <MusicInfo>
                        <Title>{e.title}</Title>
                        <Artist>{e.artists?.join(', ')}</Artist>
                        </MusicInfo>
                    </TrackBlock>
                )
            }
            </div>
        </>
        )
}

export default MisicSearch