import React from 'react'


import Featured from '../trivagocomponents/featured/featured';
import './home.css';
import { Navbar } from '../trivagocomponents/navbar/navbar';
import Propertylist from '../trivagocomponents/propertylist/property';
import Featuredproperties from '../trivagocomponents/featuredproperties/featuredproperties';
import Maillist from '../trivagocomponents/maillist/maillist';
import Footer from '../trivagocomponents/footer/footer';
import { Header } from '../trivagocomponents/header/header';
import Company from '../../Company-section/Company';
import Roomscustomer from '../../roomscustomer/roomscustomer';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
export function Hometrivago(){
    const [showLanguages, setShowLanguages] = useState(false);
    const handleLanguagesClick = () => {
        setShowLanguages(!showLanguages);
      };
      const { t, i18n } = useTranslation();
    
    //   const handleChangeLanguage = (lang: string) => {
    //     i18n.changeLanguage(lang);
    //   };
    return(

        <>
        
        <Navbar/>
        <Header/>
        <br/>
        <br/>
        <br/>

        <div className='homeContainer'>
        <Company/>
        <div className='homeTitle'>{t('ex')}</div>
            <Roomscustomer/>
           
         
            <Featured/>
        </div>
        <div className='homeTitle'>{t('take')}</div>

        <Propertylist/>                                                                                                                          <br/>
        
       
   {/* hottel booking pages */}
        
        <div className='homeTitles'>{t('our')}</div>
       <Featuredproperties/>
        <br/>
        <br/>
        <br/>
        {/* <Maillist/>
        <Footer/> */}
        </>
    );
}