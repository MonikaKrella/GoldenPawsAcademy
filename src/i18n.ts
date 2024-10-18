import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import dummyIntroPL from './translations/pl/dummyIntro.json';
import goAroundPL from './translations/pl/goAround.json';
import huntingWhislePL from './translations/pl/huntingWhistle.json';
import recallWhistlePL from './translations/pl/recallWhistle.json';
import stopWhistlePL from './translations/pl/stopWhistle.json';

const resources = {
  pl: {
    stopWhistle: stopWhistlePL,
    dummyIntro: dummyIntroPL,
    goAround: goAroundPL,
    recallWhistle: recallWhistlePL,
    huntingWhistle: huntingWhislePL,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'pl',
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
