import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames/bind';
import * as styles from  './Button.css';

const cx = classNames.bind(styles);

export const Button = (props) => {
  const { onClickEvent, text, disabled, btnType, theme } = props;
  const onClickHandler = (e) => {
    onClickEvent();
  }
  return (
    <button className={cx(btnType, theme)} disabled={disabled} onClick={(e) => {onClickHandler(e)}}>{text}</button>
  )
}

Button.defaultProps = {
  disabled: false,
  btnType: "btn-primary",
  theme: ''
}
Button.propTypes = {
  onClickEvent: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  btnType: PropTypes.string,
  theme: PropTypes.string,
}

export default (Button);
