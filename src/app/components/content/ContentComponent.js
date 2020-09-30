import React, { useEffect } from 'react';
import './index.scss';
import FilmItemElement from './film-item/FilmItemElement';
import FilmsDataService from '../../sharedServices/FilmsDataService';

const filmTypesFilter = ['all', 'documentary', 'comedy', 'horror', 'crime'];
const filmsService = FilmsDataService.getInstance();
const selectedFilmGenre = 'all';

const changeSortType = (event) => filmsService.sortFilms(event.target.value);

const contentComponent = () => {
  const [filmsList, setFilmsList] = React.useState(filmsService.getAllFilms());
  const [numFilmsFound, setNumFilmsFound] = React.useState(filmsList.length);

  useEffect(() => {
    const filmsListChangedSubscription = filmsService.filmsList.subscribe((newFilmsList) => {
      setFilmsList(newFilmsList);
      setNumFilmsFound(newFilmsList.length);
    });

    return () => filmsListChangedSubscription.unsubscribe();
  }, []);

  return <div className={'app-content'}>
        <div className={'app-content-management-section'}>
            <ul>
                {filmTypesFilter.map((filmType) => <li key={filmType.toString()}>
                        <a href="" className={filmType === selectedFilmGenre ? 'active' : ''}>{filmType}</a>
                    </li>)}
                <li className={'app-management-section-sorting'}>
                    sort by
                    <select defaultValue={'year'} onChange={changeSortType}>
                        <option value="year">release date</option>
                        <option value="title">title</option>
                    </select>
                </li>
            </ul>
            <h2> {numFilmsFound} movies found</h2>
        </div>
        <div className={'app-film-list-section'}>
            {filmsList.map((film) => <FilmItemElement {...film} key={film.id}/>)}
        </div>
    </div>;
};

export default contentComponent;
