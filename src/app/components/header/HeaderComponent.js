import React, { useEffect } from 'react';
import './index.scss';
import ModalService from '../../sharedServices/ModalService';
import FilmsDataService from '../../sharedServices/FilmsDataService';

const modalService = ModalService.getInstance();
const filmsService = FilmsDataService.getInstance();

const headerComponent = () => {

  const useSelectedFilmStatus = () =>
  {
    const [selectedFilm, setSelectedFilm] = React.useState({});
    useEffect(() => {
      const filmSelectSubscription = filmsService.selectedFilm.subscribe((newSelectedFilm) => {
        setSelectedFilm(newSelectedFilm);
      });

      return () => filmSelectSubscription.unsubscribe();
    }, []);

    return selectedFilm
  }

  const {imgUrl, title, year, genre} = useSelectedFilmStatus();

  return <header className={'app-header'}>
        {title ? (<div className={'app-header-film-info'}>
                    <div className={'app-header-film-info-header'}>
                        <img
                            src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png'
                            className={'netflix-logo'} alt=""/>
                        <div className={'app-header-film-info-search'} onClick={() => filmsService.selectFilm()}>&#128270;</div>
                    </div>
                    <div className={'app-header-film-info-header-section'}>
                        <img
                            src={imgUrl}
                            alt=""/>
                        <div>
                            <div className={'app-header-film-info-header-section-content'}>
                                <div className={'app-header-film-info-header-section-header'}>{title}</div>
                                <div className={'app-header-film-info-header-section-sub-header'}>{genre}</div>

                                <div className={'app-header-film-info-header-section-info'}>
                                    <span>{year}</span><span>154 min</span>
                                </div>
                                <div className={'app-header-film-info-header-section-description'}>
                                    Бухгалтер Энди Дюфрейн обвинён в убийстве собственной жены и её любовника. Оказавшись в
                                    тюрьме под названием Шоушенк, он сталкивается с жестокостью и беззаконием, царящими по
                                    обе
                                    стороны решётки. Каждый, кто попадает в эти стены, становится их рабом до конца жизни.
                                    Но
                                    Энди, обладающий живым умом и доброй душой, находит подход как к заключённым, так и к
                                    охранникам, добиваясь их особого к себе расположения.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        )
          : (<>
                <div className={'app-header-title-section'}>
                    <img
                        src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png'
                        className={'netflix-logo'} alt=""/>
                    <a className={'button transparent-btn'}
                       onClick={() => modalService.openModal(ModalService.UPDATE_MODAL_NAME)}>+ add movie</a>
                </div>
                <div className={'app-header-search-section'}>
                    <h1>find your movie</h1>
                    <div className={'app-header-search-form'}>
                        <input className={'header-search-input'} type='text' placeholder='What do you want to watch?'/>
                        <a className={'button'}>search</a>
                    </div>
                </div>
            </>)}
    </header>;
};

export default headerComponent;
