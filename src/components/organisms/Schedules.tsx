import React, { useState,useEffect } from 'react';
import styled from 'styled-components'
import MusicPlayer from '../molecules/MusicPlayer'
import Photoes from '../molecules/Photoes'
import Movie from '../molecules/Movie'
import MyDB from '../../database/DB'
import moment from 'moment'

const ScheduleWrap = styled.div`
`
const ScheduleBlock = styled.div`
    width:30rem;
    margin:0 auto;
`
const TimeBlock = styled.div`
    width:5rem;
    font-size:1.8rem;
    margin-top:0.2rem;
`
const DNBlock = styled.div`
    margin:0.2rem;
`
const DetailSchedule = styled.div`
    display: flex;
    align-items : center;
    margin-top:0.2rem;
`
const Bullet = styled.div`
    width:1rem;
    height:1rem;
    background:${({color})=>color?color:'#FB6062'};
    border-radius:50%;
    margin-right:1rem;
`
const NameBlock = styled.div`
    font-size:1.2rem;
`
const Attatchment = styled.div`
    border-left:0.14rem solid gray;
    padding-left:1.2rem;
    margin-left:0.4rem;
    padding:0.8rem 0 0.8rem 1.2rem;
    overflow:hidden;
`
const TimeWrap = styled.div`
    float:left;
`
const Content = styled.div`
    display:inline-block;
`

function Schedules({date}){
    const [data,setData] = useState([])
    
    const getSchedules=async()=>{
        const DB = new MyDB()
        const fDate=moment(date).format('YYYY-MM-DD')
        const newData = await DB.findByDate(fDate)
        setData(newData)
        console.log(newData)
    }
    useEffect(()=>{
        getSchedules()
        
    },[date])
    
    return(
        <ScheduleWrap>
        {
            data.map(e=>
                <ScheduleBlock>
                    <TimeWrap>
                    <TimeBlock></TimeBlock>
                    <DNBlock></DNBlock>
                    </TimeWrap>
                    <Content>
                    <DetailSchedule>
                        <Bullet color={e.label?.color}/>
                        
                        <NameBlock>{e.title}</NameBlock>
                    </DetailSchedule>
                    {e.attachment?<Attatchment>
                        {e.attachment?.type==0?<Photoes/>
                        :e.attachment?.type==1
                        ?<></>
                        :e.attachment?.type==2
                        ?<MusicPlayer data={e.attachment?.data}/>
                        :e.attachment?.type==3
                        ?<Movie data={e.attachment?.data}/>
                        :null 
                        }
                    </Attatchment>:null}
                    </Content>
                </ScheduleBlock>
            )
        }
        </ScheduleWrap>
        
        )
}

export default Schedules
/*
type 
0=photo✔
1=music✔
2=transport => plane or train
3=movie ✔
4=book
5=file
*/