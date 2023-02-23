import Notiflix from 'notiflix';

export const loginGreetings = (login: string) =>
  Notiflix.Notify.success(`Welcome back, ${login}`);

export const notificateSuccess = (totalNews: number) =>
  Notiflix.Notify.success(`Yeeey, found ${totalNews} news`);

export const notificateError = (error: unknown) =>
  Notiflix.Notify.failure(`Something went wrong ${error}`);

export const notificateDelete = (title: string) =>
  Notiflix.Notify.warning(
    `The new with a title ${title} was successfuly deleted`,
  );

Notiflix.Notify.init({
  width: '280px',
  position: 'right-top',
  distance: '10px',
  opacity: 1,
  borderRadius: '5px',
  rtl: false,
  timeout: 3000,
  messageMaxLength: 110,
  backOverlay: false,
  backOverlayColor: 'rgba(0,0,0,0.5)',
  plainText: true,
  showOnlyTheLastOne: false,
  clickToClose: false,
  pauseOnHover: true,
  ID: 'NotiflixNotify',
  className: 'notiflix-notify',
  zindex: 4001,
  fontFamily: 'Quicksand',
  fontSize: '13px',
  cssAnimation: true,
  cssAnimationDuration: 400,
  cssAnimationStyle: 'fade',
  closeButton: false,
  useIcon: true,
  useFontAwesome: false,
  fontAwesomeIconStyle: 'basic',
  fontAwesomeIconSize: '34px',
  warning: {
    background: '#ff524b',
  },
});
