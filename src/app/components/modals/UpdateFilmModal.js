import React from 'react';
import CommonModalComponent from './commonModal/CommonModalComponent';
import FilmsDataService from '../../sharedServices/FilmsDataService';
import ModalService from '../../sharedServices/ModalService';

const filmsService = FilmsDataService.getInstance();
const modalService = ModalService.getInstance();

const updateFilmModal = () => {
  const [filmId, setFilmId] = React.useState(null);
  const [film, setFilm] = React.useState(filmsService.getFilmById(filmId));
  const [isUpdateModalVisible, setIsUpdateModalVisible] = React.useState(false);
  const handleSubmit = (event) => {
    const formData = new FormData(event.target);

    event.preventDefault();
    for (const [key, value] of formData.entries()) {
      film[key] = value;
    }
    filmsService.updateFilm(film);
    modalService.closeModal(ModalService.UPDATE_MODAL_NAME);
  };
  let updateFormRef;

  const clearFormHandler = () => {
    updateFormRef.title.value = '';
    updateFormRef.genre.value = '';
    updateFormRef.year.value = '';
    updateFormRef.imgUrl.value = '';
  };

  modalService.modalStateChange.subscribe((modalEvent) => {
    if (modalEvent.modalName === ModalService.UPDATE_MODAL_NAME) {
      setFilmId(modalEvent.id);
      setFilm(filmsService.getFilmById(modalEvent.id));
      setIsUpdateModalVisible(modalEvent.isOpen);
    }
  });
  return <>
        {isUpdateModalVisible
          ? (<CommonModalComponent modalTitle={filmId ? 'update movie' : 'add movie'} modalName={ModalService.UPDATE_MODAL_NAME}>
                <form onSubmit={handleSubmit} ref={(el) => { updateFormRef = el; }}>
                    {filmId ? (
                            <label className={'app-modal-input-element'}>id
                              <input type="text" name={'id'} value={filmId} readOnly/>
                            </label>) : '' }
                    <label className={'app-modal-input-element'}>title
                      <input type="text" name={'title'} defaultValue={film.title}/>
                    </label>
                    <label className={'app-modal-input-element'}>genre
                      <input type="text" id={'genre'} name={'genre'} defaultValue={film.genre}/>
                    </label>
                    <label className={'app-modal-input-element'}>year
                      <input type="text" name={'year'} defaultValue={film.year}/>
                    </label>
                    <label className={'app-modal-input-element'}>Image url
                      <input type="text" name={'imgUrl'} defaultValue={film.imgUrl}/>
                    </label>
                    <div className={'app-modal-footer'}>
                      <a className={'button transparent-btn'} onClick={clearFormHandler}>reset</a>
                      <input type="submit" className={'button'} value={'save'}/>
                    </div>
                </form>

            </CommonModalComponent>) : ''}
    </>;
};

export default updateFilmModal;
