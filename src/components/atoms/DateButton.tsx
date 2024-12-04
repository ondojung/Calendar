import React, { useState } from 'react';
import styled from 'styled-components'
import moment from 'moment'

const DateButtonWrap = styled.div`
    height:2.2rem;
    border-radius:0.5rem;
    margin-top:0.4rem;
    background:#EEEEEF;
    line-height:2.2rem;
    padding:0 0.8rem 0 0.8rem;
    float:left;
    margin-left:0.5rem;
`
const monthArray = ['Jan','Feb','Mar','Apr','May','Jun','July','Aug','Sep','Oct','Nov','Dec']

function DateButtonBlock({id,handler}){
    const day=moment()
    const [date,setDate] = useState(day) 
    const [time,setTime] = useState(day.hour()+':'+day.minute()) 
    
    return(
        <>
        <label htmlFor={'date_'+id}>
            <DateButtonWrap>
                {monthArray[date.month()]} {date.date()}, {date.year()}
            </DateButtonWrap>
        </label>
        <label htmlFor={'time_'+id}>
            <DateButtonWrap>
                {formatAMPM(time)}
            </DateButtonWrap>
        </label>    
        <input type="date" id={'date_'+id} name={'date'} style={{width:'0',padding:'0',border:'none'}} onChange={(e)=>{
        setDate(moment(e.target.value))
        handler(e.target.value,time)
        }}/>
        <input type="time" id={'time_'+id} name={'date'} style={{width:'0',padding:'0',border:'none'}} onChange={(e)=>{
        setTime(e.target.value)
        handler(date.format('YYYY-MM-DD'),e.target.value)
        }}/>
        
        </>
        )
}

function formatAMPM(date) {
  const spl = date.split(':')
  var hours:any = Number(spl[0]);
  var minutes:any = Number(spl[1])
  var ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
}

export default DateButtonBlock