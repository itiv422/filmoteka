import React from 'react';
import './index.scss';
import PropTypes from 'prop-types';
import ModalService from '../../../sharedServices/ModalService';

const modalService = ModalService.getInstance();

const commonModalComponent = (props) => <div className={'app-common-modal'}>
    <div className={'app-common-modal-content'}>
        <span className={'app-modal-close'} onClick={() => modalService.closeModal(props.modalName)}>&times;</span>
        <span className={'app-modal-title'}>{props.modalTitle}</span>
        {props.children}
    </div>
</div>;

commonModalComponent.propTypes = {
  modalTitle: PropTypes.string.isRequired,
  modalName: PropTypes.string.isRequired,
};

export default commonModalComponent;
