import * as React from 'react';
import './roomscus.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import axios from 'axios';

export default function Roomscustomer() {
  const [getdata, setGetdata] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    fetch('http://localhost:3006/get')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setGetdata(data);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="scroll-container">
      <section className="content">
        <div className="row flex-nowrap overflow-auto">
          {getdata.map((value, index) => (
            <div key={index} className="col-md-4" style={{ margin: '10px' }}>
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
                      {value.hotelname} {value.place}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div">
                      {value.floorsize} {value.rent}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {value.description}
                    </Typography>
                    <br />
                    <Link to={`/viewmore/${value.id}`} className='enroll'>{t('viewmore')}</Link>
                    <Link to="/book/1" className='enroll'> {t('book')}</Link>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
