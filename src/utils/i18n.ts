import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  EN: {
    translation: {
      hello: 'Hello!',
      home: 'Home',
      news: 'News',
      profile: 'Profile',
      logIn: 'LOG IN',
      logOut: 'LOG OUT',
      welcome: 'Welcome',
      form: 'LOG IN FORM',
      login: 'Login',
      pass: 'Password',
      profilePage: 'Soon here will be a page of your profile',
      loadMore: 'LOAD MORE',
      error: 'The login or pass is not correct',
      footer: 'From Ukraine with love',
      introduction:
        'Thank you for visiting this site, it was made by Ukrainian Frontend developer Bronislav. Here you can find all the latest news from USA, United Kingdom and my country, which is fighting for it`s own freedom and we need help. You can help by donation to funds that are helping our figthers in this war. Every drop matters, so, please, help us finish those crimes against humanity. For your comfort you can find a link to one of those funds below.',
    },
  },
  UA: {
    translation: {
      hello: 'Привіт!',
      home: 'Головна',
      news: 'Новини',
      profile: 'Профіль',
      logIn: 'УВІЙТИ',
      logOut: 'ВИЙТИ',
      welcome: 'Вітаємо',
      form: 'ФОРМА ВХОДУ',
      login: 'Логін',
      pass: 'Пароль',
      profilePage: 'Скоро тут буде сторінка Вашого профілю',
      loadMore: 'ЗАВАНТАЖИТИ ЩЕ',
      error: 'Ім`я користувача або пароль введено неправильно.',
      footer: 'З України з любов`ю',
      introduction:
        'Дякую за візит цього сайту, він був зроблений українським Фронтенд розробником Броніславом. Тут Ви можете знайти всі останні новини з США, Англії і моєї країни, котра бореться за свою власну свободу і нам потрібна допомога. Ви можете допомгти задонативши в фонди, які допомогають нашим бійцям в цій війні. Кожна крапля важлива, тому, будь ласка, допоможіть нам  закінчити ті злочини проти людства. Для Вашого комфорту, Ви можете знайти посилання на один з таких фондів нижче.',
    },
  },
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    fallbackLng: 'EN',
    debug: true,

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
