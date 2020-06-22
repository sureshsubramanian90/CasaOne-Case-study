import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames/bind';
import * as styles from  './DropDown.css';

const cx = classNames.bind(styles);

export const DropDown = (props) => {
    const{ onChange, source, defaultValue } = props;
    function onChangeEvent(e) {
        onChange(e.target.value);
    }
    return (
        <div className={cx('dropDownCont')}>
            <select className={cx('dropDownBtn')} onChange={onChangeEvent} value={defaultValue}>
                <option value="" disabled selected>Select your option</option>
                {source.map((item) => {
                    return(
                    <option key={item.id} value={item.type}>{item.displayName}</option>
                    )
                })}
            </select>
        </div>
    )
}

export default DropDown;
