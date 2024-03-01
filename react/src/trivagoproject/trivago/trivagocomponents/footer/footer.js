import "./footer.css";
import { useTranslation } from 'react-i18next';
import { useState } from "react";
const Footer = () => {
  const [showLanguages, setShowLanguages] = useState(false);
  const handleLanguagesClick = () => {
    setShowLanguages(!showLanguages);
  };
  const { t, i18n } = useTranslation();

  // const handleChangeLanguage = (lang: string) => {
  //   i18n.changeLanguage(lang);
  // };
  return (
    <div className="footer">
      <div className="fLists">
        <ul className="fList">
          <li className="fListItem">{t('countries')}</li>
          <li className="fListItem">{t('Regions')}</li>
          <li className="fListItem">{t('Cities')}</li>
          <li className="fListItem">{t('Districts')}</li>
          <li className="fListItem">{t('Apartments')}</li>
          <li className="fListItem">{t('Hotels')}</li>
        </ul>
        <ul className="fList">
          <li className="fListItem">{t('Homes')} </li>
          <li className="fListItem"> {t('Apartments')} </li>
          <li className="fListItem">{t('Resorts')} </li>
          <li className="fListItem">{t('Villas')}</li>
          <li className="fListItem">{t('Hotels')}</li>
          <li className="fListItem">{t('Guest houses')}</li>
        </ul>
        <ul className="fList">
          <li className="fListItem">{t('unique')} </li>
          <li className="fListItem">{t('Reviews')} </li>
          <li className="fListItem">{t('unpack')} </li>
          <li className="fListItem">{t('travel')} </li>
          <li className="fListItem">{t('sea')} </li>
        </ul>
        <ul className="fList">
          <li className="fListItem">{t('car')} </li>
          <li className="fListItem"> {t('f')} </li>
          <li className="fListItem">{t('res')}</li>
          <li className="fListItem">{t('travelagents')} </li>
        </ul>
        <ul className="fList">
          <li className="fListItem"> {t('cust')} </li>
          <li className="fListItem"> {t('par')} </li>
          <li className="fListItem"> {t('careers')} </li>
          <li className="fListItem"> {t('Sustainability')} </li>
          <li className="fListItem">{t('press')}</li>
          <li className="fListItem"> {t('safety')} </li>
          <li className="fListItem">{ t('in')}</li>
          <li className="fListItem">{t('ter')}</li>
        </ul>
      </div>
      
      <div className="fText"> {t('copy')} </div>
    </div>
  );
};

export default Footer;