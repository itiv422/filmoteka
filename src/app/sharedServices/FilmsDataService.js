import { Subject } from 'rxjs';

export default class FilmsDataService {
    static serviceInstance = null;

    filmsMock = [
      {
        id: '1',
        imgUrl: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/16e4264f-34eb-4105-a198-5d9e5d7f95ce/300x450',
        title: 'Fairy',
        year: 2019,
        genre: 'drama',
      },
      {
        id: '2',
        imgUrl: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/96b659b6-5b80-4555-aa42-608708d13cce/300x450',
        title: 'The Founder',
        year: 2016,
        genre: 'biography',
      },
      {
        id: '3',
        imgUrl: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/b2ac17e8-b388-4be6-a7ad-fef57115e285/300x450',
        title: 'The Professor',
        year: 2018,
        genre: 'comedy',
      },
      {
        id: '4',
        imgUrl: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/3812d7d7-23b1-4461-903f-f9607a120325/300x450',
        title: 'Behind You',
        year: 2020,
        genre: 'horror',
      },
      {
        id: '5',
        imgUrl: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/ba0c229d-502f-411d-95f4-3a4412a4383e/300x450',
        title: 'Force of Nature',
        year: 2020,
        genre: 'action',
      },
      {
        id: '6',
        imgUrl: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1704946/5a29e70f-97dd-427e-a561-9ff36f6bc166/300x450',
        title: 'Best Comedy Shorts',
        year: 2020,
        genre: 'comedy',
      },
    ];

    filmsListChanged = new Subject();

    static getInstance() {
      if (!FilmsDataService.serviceInstance) {
        FilmsDataService.serviceInstance = new FilmsDataService();
      }
      return FilmsDataService.serviceInstance;
    }

    filmsListChangedEvt() {
      this.filmsListChanged.next(this.filmsMock.slice());
    }

    getAllFilms() {
      return this.filmsMock;
    }

    getFilmById(filmId) {
      const filmElement = this.filmsMock.find((film) => film.id === filmId);
      return filmElement || {
        imgUrl: '',
        title: '',
        year: null,
        genre: '',
      };
    }

    addFilm(film) {
      const filmElement = { ...film };

      filmElement.id = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString();
      this.filmsMock.push(filmElement);
      this.filmsListChangedEvt();
    }

    deleteFilmById(filmId) {
      this.filmsMock = this.filmsMock.filter((film) => film.id !== filmId);
      this.filmsListChangedEvt();
    }

    updateFilm(film) {
      if (film.id) {
        this.filmsMock[this.filmsMock.findIndex((filmItem) => filmItem.id === film.id)] = film;
        this.filmsListChangedEvt();
        return;
      }
      this.addFilm(film);
    }

    sortFilms(sortField) {
      const comparator = (film1, film2) => (film1[sortField] > film2[sortField] ? 1 : -1);

      this.filmsMock = this.filmsMock.sort(comparator);
      this.filmsListChangedEvt();
    }
}
