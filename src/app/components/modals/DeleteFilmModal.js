import React, { useEffect } from 'react';
import CommonModalComponent from './commonModal/CommonModalComponent';
import FilmsDataService from '../../sharedServices/FilmsDataService';
import ModalService from '../../sharedServices/ModalService';

const filmsService = FilmsDataService.getInstance();
const modalService = ModalService.getInstance();

const deleteFilmModal = () => {
  const [filmId, setFilmId] = React.useState(null);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = React.useState(false);
  const confirmHandler = () => {
    filmsService.deleteFilmById(filmId);
    modalService.closeModal(ModalService.DELETE_MODAL_NAME);
  };

  useEffect(() => {
    const modalStateChangeSubscription = modalService.modalStateChange.subscribe(({modalName, id, isOpen}) => {
      if (modalName === ModalService.DELETE_MODAL_NAME) {
        setFilmId(id);
        setIsDeleteModalVisible(isOpen);
      }
    });

    return () => modalStateChangeSubscription.unsubscribe();
  }, []);

  return <>
        {isDeleteModalVisible
          ? (<CommonModalComponent modalTitle={'delete movie'} modalName={ModalService.DELETE_MODAL_NAME}>
                <div>Are you sure you want to delete this movie?</div>
                <div className={'app-modal-footer'}>
                    <a className={'button'} onClick={confirmHandler}>confirm</a>
                </div>
            </CommonModalComponent>) : ''}
    </>;
};

export default deleteFilmModal;
