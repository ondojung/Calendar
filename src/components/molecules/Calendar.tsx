import React, { useState,useEffect } from 'react';
import styles from './Calendar.module.css'
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

function CalendarArr({year,month,setDay,selectedDay,setSelected}){
    
  const curMonthLastDate = new Date(year, month, 0).getDate();
  const prevMonthLastDay = new Date(year, month - 1, 0).getDay();
  const allDaysArr = [];
  
  if (prevMonthLastDay !== 6) {
    for (let i = 0; i <= prevMonthLastDay; i++) {
      allDaysArr.push(
        <td
          key={`empty-${i}`}
          className={styles.emptyDay}
        />
      );
    }
  }
  const today = new Date()
  for (let i = 1; i <= curMonthLastDate; i++) {
    let isToday = false;
    let isSelected = false;
    
    if (
      year === today.getFullYear() &&
      month === today.getMonth() + 1 &&
      i === today.getDate()
    ) {
      isToday = true;
    }
    
    if (
      year === new Date(selectedDay).getFullYear() &&
      month === new Date(selectedDay).getMonth() + 1 &&
      i === new Date(selectedDay).getDate()
    ) {
      isSelected = true;
    }
    
    
    allDaysArr.push(
      <td
        key={i}
        className={`${styles.dayBlock}
        ${isToday && styles.today}
        ${isSelected && styles.selected}`}
        onClick={() => {
          setDay(new Date(year,month - 1,i))
          setSelected(true)
        }}
      >
        {i}
      </td>
    );
  }
  const calendar = []
  for (let i = 1; i <= 6; i++) {
    const weekArr = allDaysArr.slice(0, 7);
    const lack = 7 - weekArr.length;
    if (lack !== 0) {
      for (let j = 1; j <= lack; j++) {
        weekArr.push(
          <td
            key={`empty-${j}`}
            className={styles.emptyDay}
          />
        );
      }
    }
    // 2-3. 완성된 한 주를 반환할 배열에 추가
    calendar.push(<tr key={i}>{weekArr.map((el) => el)}</tr>);
    // 2-4. 추가된 날짜는 기존 배열에서 삭제
    allDaysArr.splice(0, 7);
  }

  return (<>{calendar.map((el) => el)}</>);
}
function Calendar({day,selectedDay,setSelected,setDay}){
    return(
        <div className={styles.container}>
        <div className={styles.CalendarHeader}>
          
        <DateBlock>
        <YearBlock>{day.getFullYear()}</YearBlock>
        <MonthBlock>
        {month[day.getMonth()]}
        </MonthBlock>
        </DateBlock>
        </div>
        <table className={styles.calendarContainer}>
        <thead>
          <tr>
            <th style={{color:'#E25241'}}>SUN</th>
            <th>MON</th>
            <th>TUE</th>
            <th>WED</th>
            <th>THU</th>
            <th>FRI</th>
            <th style={{color:'#4994EF'}}>SAT</th>
          </tr>
        </thead>
        <tbody>
        <CalendarArr year={day.getFullYear()} month={day.getMonth()+1} setDay={setDay} selectedDay={selectedDay} setSelected={setSelected}/>
        </tbody>
      </table>
        </div>
        )
}

export default Calendar