import React from 'react';
import { useTranslation } from 'react-i18next';

export default function LanguageGenerator() {
  const { t, i18n } = useTranslation();

  const handleChangeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <>
      <h1>{t('welcomeMessage madhu')}</h1>
      <p>{t('introduction')}</p>
      <h1>{t('welcomeMessage', { name: 'madh' })}</h1>
      <p>{t('introduction')} </p>
      <select onChange={(e) => handleChangeLanguage(e.target.value)}>
        <option value="en">English</option>
        <option value="ta">Tamil</option>
        <option value="sp">Spanish</option>
        {/* Add more language options as needed */}
      </select>
    </>
  );
}
