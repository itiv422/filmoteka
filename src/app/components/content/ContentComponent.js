import React from 'react';
import './index.scss';
import FilmItemElement from './film-item/FilmItemElement';

const filmTypesFilter = ['all', 'documentary', 'comedy', 'horror', 'crime'];
const numFilmsFoundMock = 39;
const filmsMock = [
  {
    imgUrl: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/16e4264f-34eb-4105-a198-5d9e5d7f95ce/300x450',
    title: 'Fairy',
    year: 2019,
    genre: 'drama',
  },
  {
    imgUrl: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/96b659b6-5b80-4555-aa42-608708d13cce/300x450',
    title: 'The Founder',
    year: 2016,
    genre: 'biography',
  },
  {
    imgUrl: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/b2ac17e8-b388-4be6-a7ad-fef57115e285/300x450',
    title: 'The Professor',
    year: 2018,
    genre: 'comedy',
  },
  {
    imgUrl: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/3812d7d7-23b1-4461-903f-f9607a120325/300x450',
    title: 'Behind You',
    year: 2020,
    genre: 'horror',
  },
  {
    imgUrl: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/ba0c229d-502f-411d-95f4-3a4412a4383e/300x450',
    title: 'Force of Nature',
    year: 2020,
    genre: 'action',
  },
  {
    imgUrl: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1704946/5a29e70f-97dd-427e-a561-9ff36f6bc166/300x450',
    title: 'Best Comedy Shorts',
    year: 2020,
    genre: 'comedy',
  },
];
const selectedFilmGenre = 'all';

const contentComponent = () => <div className={'app-content'}>
        <div className={'content-management-section'}>
            <ul>
                {filmTypesFilter.map((filmType) => <li key={filmType.toString()}>
                        <a href="" className={filmType === selectedFilmGenre ? 'active' : ''}>{filmType}</a>
                    </li>)}
                <li className={'management-section-sorting'}>
                    sort by
                    <select defaultValue={'release date'}>
                        <option value="release date">release date</option>
                    </select>
                </li>
            </ul>
            <h2> {numFilmsFoundMock} movies found</h2>
        </div>
        <div className={'film-list-section'}>
            {filmsMock.map((film) => <FilmItemElement {...film} key={film.title}/>)}
        </div>
    </div>;

export default contentComponent;
