import React, { useState,useEffect } from 'react';
import styles from './Calendar.module.css'
import WeeklyDateBlock from './WeeklyDateBlock'

function addDays(date, days) {
  const clone = new Date(date);
  clone.setDate(date.getDate() + days)
  return clone;
}

function WeeklyArr({date,setDay}){
    const day = date.getDay()
    const calendar = []
    //현재 요일이 4, 1 일때는 1-4
    for (let i = 0; i <= 6; i++) {
        const addNum = i - day
        const weekDay = addDays(date, addNum);
        calendar.push(
          <td
            key={i}
            className={`${styles.dayBlock}
            ${addNum==0 && styles.selected}`}
            onClick={()=>setDay(weekDay)}>
            {weekDay.getDate()}
          </td>
        );
    }
    
    return(
        <>
            <tr>{calendar.map((el) => el)}</tr>
        </>
        )
}

function Weekly({date,setDay}){
    return(
        <div className={styles.container}>
        <WeeklyDateBlock date={date}/>
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
        <WeeklyArr date={date} setDay={setDay}/>
        </tbody>
      </table>
        </div>
        )
}

export default Weekly
// 만약 날짜가 17일 day가 4라면? 목요일 => 0,1,2,3 배열에 넣고 4는 today 5,6 배열에 순서대로 넣기,
//1일때 -> 4-1=3 => 3일전