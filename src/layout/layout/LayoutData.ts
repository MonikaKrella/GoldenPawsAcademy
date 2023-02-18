import { LayoutModule } from './../../types/layout-data';
export const LayoutData: LayoutModule[] = [
  {
    navbarTitle: 'Fundamenty',
    sidebarData: [
      {
        title: 'Sygnały',
        path: '/signals',
      },
      {
        title: 'Sesje treningowe',
        path: '/sessions',
      },
      {
        title: 'Kontakt wzrokowy',
        path: '/eye-contact',
      },
      {
        title: 'Samokontrola',
        path: '/self-control',
      },
      {
        title: 'Zabawa',
        path: '/toy-play',
      },
      {
        title: 'Przywołanie',
        path: '/recall',
      },
      {
        title: 'Luźna smycz',
        path: '/loose-leash',
      },
    ],
  },
  {
    navbarTitle: 'Podstawy',
    sidebarData: [
      {
        title: 'Dostawienie do nogi',
        path: '/heel',
      },
      {
        title: 'Chodzenie przy nodze',
        path: '/heelwork',
      },
      { title: 'Siad, waruj, stój', path: '/positions' },
      {
        title: 'Zostawanie',
        path: '/stay',
      },
      {
        title: 'Target dłoni',
        path: '/target',
      },
      {
        title: 'Wysyłanie na przedmiot',
        path: '/platform',
      },
    ],
  },
  {
    navbarTitle: 'Rozszerzenia',
    sidebarData: [
      {
        title: 'Omijanie',
        path: '/round',
      },
      {
        title: 'Pozycje na odległość',
        path: '/distance',
      },
      {
        title: 'Pozycje w ruchu',
        path: '/position-movement',
      },
      {
        title: 'Zatrzymanie z biegu',
        path: '/stop-run',
      },
      {
        title: 'Wyszukiwanie przedmiotu',
        path: '/stick',
      },
      {
        title: 'Bieg do nieruchomej zabawki',
        path: '/run-to-toy',
      },
    ],
  },
  {
    navbarTitle: 'Podejście',
    sidebarData: [
      {
        title: 'Wychowanie a szkolenie',
        path: '/training',
      },
      {
        title: 'Narzędzia',
        path: '/tools',
      },
      {
        title: 'Nagrody',
        path: '/rewards',
      },
      {
        title: 'Reagowanie na błędy',
        path: '/mistakes',
      },
    ],
  },
];
