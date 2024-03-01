import React from 'react'
import { Navbar } from '../../trivago/trivagocomponents/navbar/navbar'
import { Header } from '../../trivago/trivagocomponents/header/header'
import Company from '../../Company-section/Company'
import Maillist from '../../trivago/trivagocomponents/maillist/maillist'
import Footer from '../../trivago/trivagocomponents/footer/footer'
import Rooms from '../../rooms/rooms'
import Roomscustomer from '../../roomscustomer/roomscustomer'
import Featured from '../../trivago/trivagocomponents/featured/featured'
import Propertylist from '../../trivago/trivagocomponents/propertylist/property'

export default function Homee(){
    return(
        <>
       
        <Navbar/>
        <Header/>
        <br/>
        <br/>
        <br/>
        <div className='homeContainer'>
            <Company/>

            <Rooms/>
            <Featured/>
            <div className='homeTitle'>Take a dip at these top-rated hotels</div>
            <Propertylist/>
            <Maillist/>
        <Footer/>
          </div>
       
        </>
    )
}
