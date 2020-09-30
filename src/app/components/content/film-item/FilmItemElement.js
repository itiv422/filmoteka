import React from 'react';
import './index.scss';
import PropTypes from 'prop-types';
import FilmEditDropDownMenu from './dropDownMenu/FilmEditDropDownMenu';
import FilmsDataService from '../../../sharedServices/FilmsDataService';

const filmsService = FilmsDataService.getInstance();

const filmItemElement = (props) => <div className={'app-film-item'}>
    <img src={props.imgUrl} alt="" onClick={() => filmsService.selectFilm(props.id)}/>
    <div>
        <span>{props.title}</span>
        <span>{props.year}</span>
    </div>
    <span>{props.genre}</span>
    <FilmEditDropDownMenu id = {props.id}/>
</div>;

filmItemElement.propTypes = {
  id: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
};

export default filmItemElement;
