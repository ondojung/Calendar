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
    width:4.5rem;
    aspect-ratio: 7 / 10;
    border-radius:0.4rem;
    float:left;
    border-radius:0.2rem;
    overflow:hidden;
    margin-top:0.5rem;
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
    width:22.5rem;
`
const Title=styled.div`
    font-size:1.2rem;
`
const Artist=styled.div`
    font-size:1rem;
    margin-top:0.2rem;
    height:5rem;
`

function MovieSearch({handler}){
    const [movieDB,setMovieDB]=useState([])
    const [keyword,setKeyword]=useState('')
    const onChange=(e)=>{
        setKeyword(e.target.value)
    }
    const searchMovie=async(e)=>{
        if(e.key === "Enter") {
            const req=await axios.get('/movie/search?q='+keyword,{
                headers: {
                    "Content-Type": "application/json"
                }
            })
            setMovieDB(req.data)
            
        }
    }
    return(
        <>
            <InputText>
                <Input type='search' placeHolder='Title' onChange={onChange} onKeyDown={searchMovie}></Input>
            </InputText>
            <div>
            {
                movieDB.map(e=>
                    <TrackBlock onClick={()=>handler(e)}>
                        <Thumnail>
                            <ThumnailImg src={`https://image.tmdb.org/t/p/w440_and_h660_face/${e.poster}`}/>
                        </Thumnail>
                        <MusicInfo>
                        <Title>{e.title}</Title>
                        <Artist>{e.overview?.length>100?e.overview?.substr(0, 100)+'...':e.overview}</Artist>
                        </MusicInfo>
                    </TrackBlock>
                )
            }
            </div>
        </>
        )
}

export default MovieSearch