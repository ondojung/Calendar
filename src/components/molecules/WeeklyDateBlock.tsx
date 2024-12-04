import React, { useState,useEffect } from 'react';
import styled from 'styled-components'

const DateBlock=styled.div`
    text-align:left;
    margin-left:0.5rem;
`
const YearBlock = styled.div`
    font-size:1.3rem;
`
const MonthBlock = styled.div`
    font-size:2rem;
    font-weight:700;
`
const month = ['January','February','March','April','May','June','July','August','September','October','November','December']
function WeeklyDateBlock({date}){
    return (
        <DateBlock>
        <YearBlock>{date.getFullYear()}</YearBlock>
        <MonthBlock>{month[date.getMonth()]} {date.getDate()}</MonthBlock>
        </DateBlock>
        )
}

export default WeeklyDateBlock