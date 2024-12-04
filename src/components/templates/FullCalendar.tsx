import React, { useState,useEffect,useRef } from 'react';
import styled from 'styled-components'
import MiniCalendar from '../molecules/MiniCalendar'
import { useSwipeable } from 'react-swipeable';
import { motion } from 'framer-motion';

const Container=styled.div`
    background:white;
    width:100vw;
    height:100vh;
    overflow:schroll;
    position:absolute;
    top:0;
    left:0;
    z-index:100;
    text-align:center;
`
const Calendars=styled.div`
    display:inline-block;
`
const CalendarGrid =styled.div`
    display:grid;
    grid-template-columns: repeat(3, 1fr);
    gap:0.7rem;
`
const YearBlock = styled.div`
    color: #FB6062;
    font-size:2.5rem;
    text-align:left;
    font-weight:800;
    margin:0.5rem;
`

function FullCalendar({setFullCalendar,setDay}){
    const [year,setYear] = useState(new Date())
    const monthArray = ['Jan','Feb','Mar','Apr','May','Jun','July','Aug','Sep','Oct','Nov','Dec']
    const [direction, setDirection] = useState(0);
    const handleYearChange = (increment) => {
    setDirection(increment);
    setYear((prev) => {
      const newYear = new Date(prev);
      newYear.setFullYear(prev.getFullYear() + increment);
      return newYear;
    });
  };
  const variants = {
    enter: (direction) => ({
      y: direction > 0 ? 300 : -300, // y축으로 이동
      opacity: 0,
    }),
    center: {
      y: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      y: direction > 0 ? -300 : 300, // y축으로 이동
      opacity: 0,
    }),
  };
    
    const swipeHandlers = useSwipeable({
    onSwipedUp: () => handleYearChange(1), // 다음 달로 이동
    onSwipedDown: () => handleYearChange(-1), // 이전 달로 이동
    trackTouch: true, // 터치 스와이프 활성화
    trackMouse: false, // 마우스 드래그 비활성화 (필요하면 true로 변경 가능)
  });
    
    return(
        <Container>
            <Calendars {...swipeHandlers}>
            <motion.div
        key={year}
        custom={direction}
        variants={variants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{ duration: 0.5 }}
        
      >
            <YearBlock>{year.getFullYear()}</YearBlock>
            <CalendarGrid>
            {
                monthArray.map((e,i)=>{
                    const date = new Date(`${year.getFullYear()}-${i+1}-1`);
                    return <div onClick={()=>{
                        setDay(date)
                        setFullCalendar(false)
                    }}>
                    <MiniCalendar day={date} title={e}/>
                    </div>
                })
            }
            </CalendarGrid>
            </motion.div>
            </Calendars>
        </Container>
        )
}
export default FullCalendar

/*
import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import { motion } from 'framer-motion';

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [direction, setDirection] = useState(0); // 애니메이션 방향 관리

  const handleMonthChange = (increment) => {
    setDirection(increment);
    setCurrentMonth((prev) => {
      const newMonth = new Date(prev);
      newMonth.setMonth(prev.getMonth() + increment);
      return newMonth;
    });
  };

  // 애니메이션 설정
  const variants = {
    enter: (direction) => ({
      y: direction > 0 ? 300 : -300, // y축으로 이동
      opacity: 0,
    }),
    center: {
      y: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      y: direction > 0 ? -300 : 300, // y축으로 이동
      opacity: 0,
    }),
  };

  // 스와이프 핸들러
  const swipeHandlers = useSwipeable({
    onSwipedUp: () => handleMonthChange(1), // 다음 달로 이동
    onSwipedDown: () => handleMonthChange(-1), // 이전 달로 이동
    trackTouch: true, // 터치 스와이프 활성화
    trackMouse: false, // 마우스 드래그 비활성화 (필요하면 true로 변경 가능)
  });

  const formatMonthYear = (date) =>
    `${date.getFullYear()}년 ${date.getMonth() + 1}월`;

  return (
    <div
      {...swipeHandlers}
      style={{
        overflow: 'hidden',
        width: '300px',
        height: '300px',
        position: 'relative',
        border: '1px solid #ddd',
      }}
    >
      <motion.div
        key={currentMonth.getTime()}
        custom={direction}
        variants={variants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{ duration: 0.5 }}
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '24px',
          backgroundColor: '#f9f9f9',
        }}
      >
        
      </motion.div>
    </div>
  );
};

export default Calendar;
*/