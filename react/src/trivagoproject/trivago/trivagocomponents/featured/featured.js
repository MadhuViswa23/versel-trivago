import "./featured.css";
import { useTranslation } from 'react-i18next';
import { useState } from "react";
const Featured = () => {
  const [showLanguages, setShowLanguages] = useState(false);
  const handleLanguagesClick = () => {
    setShowLanguages(!showLanguages);
  };
  const { t, i18n } = useTranslation();

  // const handleChangeLanguage = (lang: string) => {
  //   i18n.changeLanguage(lang);
  // };
  return (
    <div className="container">
      <div id="Hotel">
      <div className="row">
        <div className="col-sm-12 col-md-4">
          <div className="featuredItem">
            <img
              src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o="
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
            <a href="/dublin" style={{ textDecoration: 'none', color: "white" }}>
              <h1>{t('Dublin')}</h1>
              <h2>{t('prop')}</h2>
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-4">
          <div className="featuredItem">
            <img
              src="https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o="
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
            <a href="/reno" style={{ textDecoration: 'none', color: "white" }}>
              <h1>{t('Reno')}</h1>
              <h2>533 {t('prop')}</h2>
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-4">
          <div className="featuredItem">
            <img
              src="https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o="
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
            <a href="/austin" style={{ textDecoration: 'none', color: "white" }}>
              <h1>{t('aus')}</h1>
              <h2>532{t('prop')}</h2>
              </a>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Featured;
