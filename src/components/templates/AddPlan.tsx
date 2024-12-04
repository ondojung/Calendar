import React, { useState } from 'react';
import styled from 'styled-components'
import Switch from '../atoms/Switch'
import DateButton from '../atoms/DateButton'
import LabelButton from '../atoms/LabelButton'
import AddAttachment from './AddAttachment'
import SlideUp from '../atoms/SlideUpModal'
import LabelModal from '../organisms/LabelModal'
import moment from 'moment'
import MyDB from '../../database/DB'

const Container=styled.div`
    background:#F3F2F8;
    width:100vw;
    height:100vh;
    overflow:schroll;
    position:absolute;
    top:0;
    left:0;
    z-index:100;
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
function AddPlan({setAddPlan}){
    const DB = new MyDB()
    const [isAttach,setAttach]=useState(false) 
    const [labelModalOpen,setLabelModalOpen]=useState(false) 
    const [disableDate,setDisableDate]=useState(false)
    const [input, setInput] = useState({
     title: '',
     allDays:disableDate,
     startsDate:moment().format('YYYY-MM-DD'),
     startsTime:moment().format('hh:mm'),
     endsDate:moment().format('YYYY-MM-DD'),
     endsTime:moment().format('hh:mm'),
     label:null,
     attachment:null
    });
    const addHandler=async ()=>{
        const id = await DB.addEvent(input)
        setAddPlan(false)
    }
   //alert(JSON.stringify(input))
    return(
        <Container>
        {isAttach?<AddAttachment setAddAttachment={setAttach} handler={(value)=>{setInput({...input,attachment: value});setAttach(false)}}/>:null}
            <Header>
                New
                <CancelBtn onClick={()=>setAddPlan(false)}>Cancel</CancelBtn>
                <AddBtn onClick={addHandler}>Add</AddBtn>
            </Header>
            <InputText>
                <Input placeHolder='Title' onChange={(e)=>setInput({...input,title: e.target.value})}></Input>
            </InputText>
            <InputMenuBlock>
                <InputMenu>
                    All-day
                    <SwitchBlock><Switch 
                    handler={(value)=>setInput({...input,allDays: value})}/></SwitchBlock>
                </InputMenu>
                <InputMenu>
                    Starts
                    <DateInputBlock>
                        <DateButton id='start' handler={(d,t)=>setInput({...input,startsDate:d,
                        startsTime:t
                        })}/>
                    </DateInputBlock>
                </InputMenu>
                <InputMenu>
                    Ends
                    <DateInputBlock>
                        <DateButton id='end' handler={(d,t)=>setInput({...input,endsDate: d,endsTime: t})}/>
                    </DateInputBlock>
                </InputMenu>
            </InputMenuBlock>
            
            <InputMenuBlock>
                <InputMenu onClick={()=>setLabelModalOpen(true)}>
                    Label
                    <LabelBlock>
                        <LabelButton/>
                    </LabelBlock>
                </InputMenu>
                <InputMenu onClick={()=>setAttach(true)}>Add attachment</InputMenu>
            </InputMenuBlock>
            <SlideUp 
            setModalOpen={setLabelModalOpen}
            isOpen={labelModalOpen}
            children={<LabelModal handler={(value)=>{setInput({...input,label: value});setLabelModalOpen(false)}}/>}
            title='Labels'
            bg='#F2F2F7'
            />
            
        </Container>
        
        )
}
export default AddPlan

/*
music
photo
file
movie
*/