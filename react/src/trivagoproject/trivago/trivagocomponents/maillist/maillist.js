//import Footer from "../footer/footer"
import "./maillist.css"
import { useTranslation } from 'react-i18next';
import { useState } from "react";

const Maillist = () => {
  const [showLanguages, setShowLanguages] = useState(false);
  const handleLanguagesClick = () => {
    setShowLanguages(!showLanguages);
  };
  const { t, i18n } = useTranslation();

  // const handleChangeLanguage = (lang: string) => {
  //   i18n.changeLanguage(lang);
  // };
  return (
    <div className="mail">
      <h1 className="mailTitle">
      <img className='logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Trivago.svg/2560px-Trivago.svg.png' width='120px' height='50px' alt='TRIVAGO BOOKING' />
      </h1>
      <span className="mailDesc">{t('sign')}</span>
      <div className="mailInputContainer">
        <input type="text" placeholder="Your Email" />
        <button>{t('Subscribe')}</button>
      </div>
    </div>
  )
}


export default Maillist