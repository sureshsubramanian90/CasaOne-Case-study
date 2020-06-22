import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames/bind';
import * as styles from  './Input.css';

const cx = classNames.bind(styles);

export const Input = (props) => {
  const { onChange, value, placeHolder, index, disabled, theme } = props;
  const onChangeEvent = (e) => {
      onChange(e.target.value, index);
  }
  return (
    <input
      type="number"
      placeholder={placeHolder}
      value={value}
      onChange={(e) => {onChangeEvent(e)}}
      disabled={disabled}
      className={cx('inputCont', theme)}
    />
  )
}

export default (Input);
