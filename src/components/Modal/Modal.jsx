import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import * as styles from './Modal.css';

const cx = classNames.bind(styles);

const Modal = (props) => {
const {
   showModal,
   children,
   title,
   className,
   modalTheme,
   modalTitleTheme,
   themeContent,
   themeClose,
   themeModalBlock,
   defaultCloseBtn,
} = props;

    /**
     * Function to trigger onclose callback function registered
     * by app components
     */
const closeModal = (event) => {
   event.preventDefault();
   event.stopPropagation();
   props.onClose();
};

const modalHtml = (
    <div className={cx('modalOverlay', className)}>
        <div className={cx('modalWrapper', modalTheme)}>
            {defaultCloseBtn && <button
            className={cx('modalCloseButton', themeClose)}
            onClick={closeModal}
            type="button"
            >&times;</button>}
            <div className={cx('modalBlock', themeModalBlock)}>
                {title &&
                <div className={cx('modalHeader', modalTitleTheme)}>
                    <h2 className={cx('modalTitle')}>
                        {title}
                    </h2>
                </div>}
                {children && <div className={cx('modalContent', themeContent)}>
                    {children}
                </div>}
            </div>
        </div>
    </div>);
    if (showModal) {
        return modalHtml;
    }
    return null
};


Modal.propTypes = {
    showModal: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    children: PropTypes.oneOfType([
   PropTypes.arrayOf(PropTypes.node),
   PropTypes.node,
    ]),
    title: PropTypes.string,
    modalTheme: PropTypes.string,
    modalTitleTheme: PropTypes.string,
    themeContent: PropTypes.string,
    themeClose: PropTypes.string,
    themeModalBlock: PropTypes.string,
    defaultCloseBtn: PropTypes.bool,
};

Modal.defaultProps = {
    defaultCloseBtn: true,
}



export default Modal;
