import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';
import translationEN from './translations/en/translation.json'
import translationSP from './translations/sp/translation.json'
import translationTA from './translations/ta/translation.json'
i18next.init({
  interpolation: { escapeValue: false },
  lng: "en",
  resources: {
    en: {
      translation: translationEN
    },
    ta:{
translation: translationTA
    },
    sp: {
      translation: translationSP
    }
  }
});

ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
