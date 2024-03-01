import React from "react";
import { BrowserRouter, Route, Routes} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Hometrivago } from "./trivagoproject/trivago/home/home";
import { List } from "./trivagoproject/trivago/list/list";
import { Hotel } from "./trivagoproject/trivago/hotel/hotel";
import { Login } from "./trivagoproject/backend/login/login";
import Homee from "./trivagoproject/adminpage/home/homee";
import { Newget } from "./trivagoproject/Newget/newget";
import { Update } from "./trivagoproject/update/update";
import { Register } from "./trivagoproject/register/register";
import Hotel1 from "./trivagoproject/Hotelpages/hotelpage1";
import Hotel2 from "./trivagoproject/Hotelpages/hotelpage2";
import Hotel3 from "./trivagoproject/Hotelpages/hotelpage3";
import Booking from "./trivagoproject/booking/booking";
import LanguageGenerator from "./trivagoproject/lan/lang";
import Dublin from "./trivagoproject/dublin/dublin";
import Reno from "./trivagoproject/reno/reno";
import Austin from "./trivagoproject/austin/austin";
import Combineddata from "./trivagoproject/combineddata/combineddata";
import Hotel4 from "./trivagoproject/Hotelpages/hotelpagedublin";
import Hotel5 from "./trivagoproject/Hotelpages/hotelpagedublin2";
import Hotel6 from "./trivagoproject/Hotelpages/hotelpagedublin3";




export default function App() {
  return (
   <>
   <BrowserRouter>
  
   <Routes>
    <Route path="/" element={<Hometrivago/>}/>
    <Route path="/hotels" element={<List/>}/>
   
    <Route path="/login" element={<Login/>}/>
    <Route path="/signup" element={<Register/>}/>
    <Route path="/admin" element={<Homee/>}/>
    <Route path ="/customer" element={<Hometrivago/>}/>
    <Route path="/viewall" element={<Newget/>}/>
    <Route path="/updaterooms/:id" element={<Update/>}/>
    <Route path="/viewmore/1" element={<Hotel1/>}/>
    <Route path="/viewmore/2" element={<Hotel2/>}/>
    <Route path="/viewmore/8" element={<Hotel3/>}/>
    <Route path="/viewmoredublin/1" element={<Hotel4/>}/>
    <Route path="/viewmoredublin/2" element={<Hotel5/>}/>
    <Route path="/viewmoredublin/3" element={<Hotel6/>}/>

    
    <Route path="/book/1" element={<Booking/>}/>
    <Route path="/dublin" element={<Dublin/>}/>
    <Route path="/reno" element={<Reno/>}/>
   <Route path="/austin" element={<Austin/>}/>
   <Route path="/combinedhotel" element={<Combineddata/>}/>
  
  
    

   
  
   </Routes>
   </BrowserRouter>
   </>
  );
}