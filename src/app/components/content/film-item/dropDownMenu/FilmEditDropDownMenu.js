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
            <>
                <div>
                    Edit
                </div>
                <div onClick={() => modalService.openModal('delete', { id: props.id })}>
                    Delete
                </div>
            </>) : ''
        }
    </ul>;
};

filmEditDropDownMenu.state = { isVisible: true };

filmEditDropDownMenu.propTypes = {
  id: PropTypes.string.isRequired,
};

export default filmEditDropDownMenu;
