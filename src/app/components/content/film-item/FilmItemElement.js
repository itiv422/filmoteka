import React from 'react';
import './index.scss';
import PropTypes from 'prop-types';

const filmItemElement = (props) => <div className={'film-item'}>
        <img src={props.imgUrl} alt=""/>
        <div>
            <span>{props.title}</span>
            <span>{props.year}</span>
        </div>
        <span>{props.genre}</span>
    </div>;

filmItemElement.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
};

export default filmItemElement;
