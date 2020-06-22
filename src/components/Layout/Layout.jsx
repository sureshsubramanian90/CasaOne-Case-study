import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames/bind';
import * as styles from  './Layout.css';

const cx = classNames.bind(styles);

export const Layout = (props) => {
    return (
        <div className={cx("mainContainer")}>
            <div className={cx("headerContainer")}>
                <figure className={cx("logo")}>
                    <img src="https://product-assets.casaone.com/logos/casaone-logo.svg" alt="CasaOne Furniture" />
                </figure>
            </div>
            <div className={cx("contentContainer")}>
                {props.children}
            </div>
        </div>
    )
}

export default Layout;
