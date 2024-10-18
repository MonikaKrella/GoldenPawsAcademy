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
        title: 'Nagrody',
        path: '/rewards',
      },
      {
        title: 'Narzędzia',
        path: '/tools',
      },
      {
        title: 'Sesje treningowe',
        path: '/sessions',
      },
      {
        title: 'Reagowanie na błędy',
        path: '/mistakes',
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
    ],
  },
  {
    navbarTitle: 'Podstawy',
    sidebarData: [
      {
        title: 'Przywołanie',
        path: '/recall',
      },
      {
        title: 'Dostawienie do nogi',
        path: '/heel',
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
      {
        title: 'Luźna smycz',
        path: '/loose-leash',
      },
      {
        title: 'Chodzenie przy nodze',
        path: '/heelwork',
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
    navbarTitle: 'Dummy',
    sidebarData: [
      {
        title: 'Dummy',
        path: '/dummy',
      },
      {
        title: 'Gwizdek stój',
        path: '/stop-whistle',
      },
    ],
  },
];
