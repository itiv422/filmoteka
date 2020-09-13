import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';
import ModalService from '../../../../sharedServices/ModalService';

const modalService = ModalService.getInstance();

const filmEditDropDownMenu = (props) => {
  const [isVisible, setIsVisible] = React.useState(false);
  return <ul className={'app-film-drop-down-menu'} onClick={() => setIsVisible(!isVisible)}>
        <div className={'app-film-drop-down-menu-trigger'} />
        {isVisible ? (
            <ul>
                <li onClick={() => modalService.openModal(ModalService.UPDATE_MODAL_NAME, { id: props.id })}>
                    Edit
                </li>
                <li onClick={() => modalService.openModal(ModalService.DELETE_MODAL_NAME, { id: props.id })}>
                    Delete
                </li>
            </ul>) : ''
        }
    </ul>;
};

filmEditDropDownMenu.state = { isVisible: true };

filmEditDropDownMenu.propTypes = {
  id: PropTypes.string.isRequired,
};

export default filmEditDropDownMenu;
