import React,{useState} from "react";
import styled from 'styled-components'
import Calendar from '../molecules/Calendar'
import Weekly from '../molecules/Weekly'
import Schedules from '../organisms/Schedules'
import {ReactComponent as PlusIcon} from "../../assets/icons/plus.svg";
import {ReactComponent as BackIcon} from "../../assets/icons/back.svg";
import FullCalendar from './FullCalendar'
import AddPlan from './AddPlan'


const LayoutHomeContainer = styled.div`
    text-align:center;
    margin-top:2rem;
`
const PlusBlock = styled.div`
    padding:1rem;
    display:inline-block;
    float:right;
    clear:both;
`
const BackBlock = styled.div`
    padding:1rem;
    display:inline-block
    float:left;
    font-size:1.2rem;
    color:#FB6062;
    font-weight:700;
    overflow:hidden;
`
const Header = styled.div`
    overflow:hidden;
`

function Home(){
    const [day,setDay] = useState(new Date())
    const [selected,setSelected] = useState(false)
    const [fullCalendar,setFullCalendar] = useState(false)
    const [addPlan,setAddPlan] = useState(false)
    
  return (
      <>
      {fullCalendar?<FullCalendar setFullCalendar={setFullCalendar} setDay={setDay}/>:null}
      {addPlan?<AddPlan setAddPlan={setAddPlan}/>:null}
      <Header>
        <PlusBlock onClick={()=>setAddPlan(true)}><PlusIcon width={22} height={22} fill='#FB6062'/></PlusBlock>
        {
        selected?<BackBlock onClick={()=>setSelected(null)}>&lt;</BackBlock>
            :<BackBlock onClick={()=>setFullCalendar(true)}>&lt; {day.getFullYear()}</BackBlock>
        }
      </Header>
        <LayoutHomeContainer>
            {!selected?<Calendar day={day} setDay={setDay} setSelected={setSelected} selectedDay={day}/>:<Weekly date={day} setDay={setDay}/>}
        </LayoutHomeContainer>
        {
            selected?
            <Schedules date={day}></Schedules>
            :null
        }
    </>
    )
};


export default Home