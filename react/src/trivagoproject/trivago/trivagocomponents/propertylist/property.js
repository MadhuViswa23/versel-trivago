import React from 'react';
import './property.css';
import { useTranslation } from 'react-i18next';
import { useState } from "react";

const Propertylist = () => {
  const [showLanguages, setShowLanguages] = useState(false);
  const handleLanguagesClick = () => {
    setShowLanguages(!showLanguages);
  };
  const { t, i18n } = useTranslation();
  return (
    <div className="container">
      <div className="row">
        <div className="col-6 col-md-4 col-lg-2">
          <div className="pListItem">
            <img
              src="https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o="
              alt=""
              className="pListImg"
            />
            <div className="pListTitles">
              <h1>{t('Hotels')} </h1>
             
            </div>
          </div>
        </div>
        <div className="col-6 col-md-4 col-lg-2">
          <div className="pListItem">
            <img
              src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg"
              alt=""
              className="pListImg"
            />
            <div className="pListTitles">
              <h1>{t('Apartments')}</h1>
             
            </div>
          </div>
        </div>
        <div className="col-6 col-md-4 col-lg-2">
          <div className="pListItem">
            <img
              src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg"
              alt=""
              className="pListImg"
            />
            <div className="pListTitles">
              <h1>{t('Resorts')}</h1>
              
            </div>
          </div>
        </div>
        <div className="col-6 col-md-4 col-lg-2">
          <div className="pListItem">
            <img
              src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg"
              alt=""
              className="pListImg"
            />
            <div className="pListTitles">
              <h1>{t('Villas')}</h1>
          
            </div>
          </div>
        </div>
        <div className="col-6 col-md-4 col-lg-2">
          <div className="pListItem">
            <img
              src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg"
              alt=""
              className="pListImg"
            />
            <div className="pListTitles">
              <h1>{t('tourist')} </h1>
              
            </div>
          </div>
        </div>
        <div className="col-6 col-md-4 col-lg-2">
          <div className="pListItem">
            <img
              src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg"
              alt=""
              className="pListImg"
            />
            <div className="pListTitles">
              <h1>{t('Cabins')} </h1>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Propertylist;
