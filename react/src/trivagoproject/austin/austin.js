import * as React from 'react';
import './austin.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import { Navbar } from '../trivago/trivagocomponents/navbar/navbar';
import { Header } from '../trivago/trivagocomponents/header/header';
import Maillist from '../trivago/trivagocomponents/maillist/maillist';
import Footer from '../trivago/trivagocomponents/footer/footer';

export default function Austin() {
  

  const [getdata, setGetdata] = useState([]);
  const [showLanguages, setShowLanguages] = useState(false);

  useEffect(() => {
    fetch('http://localhost:3006/getaustin')
      .then((res) => res.json())
      .then((data) => {
        console.log(data); 
        setGetdata(data);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);
   const handleLanguagesClick = () => {
    setShowLanguages(!showLanguages);
  };
  const { t, i18n } = useTranslation();

  // const handleChangeLanguage = (lang: string) => {
  //   i18n.changeLanguage(lang);
  // };

  return (
   
   <>
   <Navbar/>
   <Header/>

   <section
      id="c"
      style={{ display: 'flex', justifyContent: 'center' , flexWrap: 'wrap', margin: '50px', gap: '30px' }}
    >
      {getdata.map((value, index) => (
        <div key={index} style={{ margin: '10px' }}>
          <Card sx={{ maxWidth: 345 }}>
         
      <CardActionArea>
      <CardMedia
  component="img"
  height="140"
  image={value.image}
  alt="Course Image"
/>
    
  
              <CardContent>
              
                <Typography gutterBottom variant="h5" component="div">
              {value.hotelname}       {value.place} 
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                  {value.floorsize}    {value.rent}
                </Typography>
                
               
                <Typography variant="body2" color="text.secondary">
          {value.description}
            </Typography><br/>
                <Link to={`/viewmore/${value.id}`} className='enroll'>{t('viewmore')}</Link>
         
    
           
        <Link to="/book/1" className='enroll'> {t('book')}
        
        </Link>
    
        

              
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
      ))}
    </section>
   <Maillist/>
   <Footer/>
   
   </>
  );
}
