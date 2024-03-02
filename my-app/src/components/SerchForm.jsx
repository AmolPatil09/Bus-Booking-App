import React, { useEffect, useState } from 'react'
import '../components/Search.css'
import { CgArrowsExchangeAltV } from "react-icons/cg";
import { FaCalendarDays } from "react-icons/fa6";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
export default function SerchForm() {
    const [date,selectedDate]=useState(new Date());
    const [showCalender,setShowCalender]=useState(false)
    useEffect(()=>{
      setToodayDate()
    },[])
    
    const setToodayDate=()=>{
        const tooday=new Date();
        const toodayDate=tooday.toISOString().split('T')[0];
        selectedDate(toodayDate);
        console.log(date);
    }
    const setTomorowDate=()=>{
        const toomorow=new Date();
       toomorow.setDate(toomorow.getDate()+1);
       selectedDate(toomorow.toISOString().split('T')[0]);
       console.log(date);
    }
    const calenderToggle=()=>{
      setShowCalender(!showCalender)
    }
    const calenderChange=(e)=>{
       const date=e;
       date.setDate(date.getDate()+1)

       selectedDate(date.toISOString().split('T')[0])
       console.log(date);
      }
   
    const disablePastDates=({date})=>{
        return date<=new Date();
        
    }

  return (
    <div className='container flex flex-col m-auto  z-0'>
      
      <div className='relative'>
      <CgArrowsExchangeAltV className='absolute right-8 top-6 z-10 h-10 w-10 bg-pink-400 rounded-full'/>
      <input type="text" className="border-2 border-pink-600 w-full h-10 mx-2 rounded-t-md px-1" disabled
       placeholder='From'
      ></input>
       <input type="text" className="border-2 border-pink-600 w-full h-10 mx-2 px-1" disabled
        placeholder='to'
       ></input>
       <button  onClick={calenderToggle} className=' mx-1 mt-3 px-1 rounded-md absolute right-36'><FaCalendarDays/></button>
       <button onClick={setToodayDate}  className='bg-pink-600 mx-1 px-1 mt-2 rounded-md absolute right-20'>tooday</button>
       <button onClick={setTomorowDate}  className='bg-pink-600  px-1 mt-2 rounded-md absolute right-0'>toomarow</button>
       <input type="date" className="border-2 border-pink-600 w-full h-10 mx-2 px-1 rounded-b-md " disabled
       value={date}
       placeholder='Date'
       />
      
      </div>
      <div className='flex justify-center'>
      {showCalender&&<Calendar className='mx-3' onChange={calenderChange} tileDisabled={disablePastDates}/>}
      </div>
      
      

    </div>
  )
}
