import React, { useState } from 'react'
import { Header } from '../trivagocomponents/header/header';
import './lists.css'
import { Navbar } from '../trivagocomponents/navbar/navbar';
import { useLocation } from 'react-router-dom';
import { format } from "date-fns";
import { DateRange } from 'react-date-range';
import SearchItem from '../trivagocomponents/searchitems/searchitems';
import Footer from '../trivagocomponents/footer/footer';
export function List(){
    const location = useLocation()
    const [destination, setDestination] = useState(location.state.destination)
    const [date, setDate] = useState(location.state.date)
    const [openDate, setOpenDate] = useState(false);
    const [options, setOptions] = useState(location.state.options)
    return(
<>

<Navbar/>
<Header type="List"/>
<div className='ListContainer'>
    <div className='ListWrapper'>
        <div className='ListSearch'>
            <h1 className='lsTitle'>Search</h1>
            <div className='lsItem'>
            <label>Destination</label>

                <input  style={{ display: 'flex', alignItems: 'center', padding: '5px' }}placeholder = {destination} type ="text" />
            </div>
            <div className='lsItemm'>
                <label>Checkin date</label>
                <span onClick={() => setOpenDate(!openDate)}>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                        date[0].endDate,
                        "MM/dd/yyyy"
                    )}`}</span>
                 {openDate && (
                       <DateRange
                       onChange={item=>setDate([item.selection])} 
                       minDate={new Date()}
                       ranges={date}
                       />
                 )}
                
            </div>
            <div className='lsItem'>
                <label>Options</label>
              

                <div className='lsOptionItem'>
                    <span className='lsOptionText'>
                        Min price <small>per night</small>
                    </span>
                    <input
                    min={35000}
                    type = "number" className='lsOptionInput'></input>
                </div>
            </div>
            <div className='lsItem'>
                <label>Options</label>
                <div className='lsOptionItem'>
                    <span className='lsOptionText'>
                        Max price <small>per night</small>
                    </span>
                    <input type = "number" 
                    max={100000}
                    className='lsOptionInput'></input>
                </div>
                
            </div>
            <div className='lsItem'>
                <label>Options</label>
                <div className='lsOptionItem'>
                    <span className='lsOptionText'>
                      Guests
                    </span>
                    <input 
                    placeholder={options.guest}
                    type = "number" min={1} className='lsOptionInput'></input>
                </div>
                
            </div>
            <div className='lsItem'>
                <label>Options</label>
                <div className='lsOptionItem'>
                    <span className='lsOptionText'>
                        Rooms
                    </span>
                    <input min={1}
                     placeholder={options.rooms}type = "number" className='lsOptionInput'></input>
                </div>
         </div>
        
            
<div className='btnn'><button>search</button></div>         
        </div>
        <div className='ListResult'>
            <SearchItem/>
           
           
        </div>
    </div>
</div>
     
</>
    );
}
