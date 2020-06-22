import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames/bind';
import Button from '../Button/Button';
import get from 'lodash/get';
import * as styles from  './RulesList.css';

const cx = classNames.bind(styles);

export const RulesList = (props) => {
    const { data, index, onEdit, onDelete } = props;
    let sNo = index;
    const renderDes = (val) => {
        const catagorey = get(val, 'catagorey.displayName', '');
        const rule = get(val, 'rule.displayName', '');
        const values = get(val, 'value', []);
        return(
            <p>{catagorey} is {rule} {values.join()}</p>
        )
    }
    return (
        <tr className={cx("tableRow", "row")}>
            <td className={cx('col1', 'sm12', 'colPadding', 'sno')}>{sNo += 1}</td>
            <td className={cx('sm4', 'visibleSm', 'mobLabel')}>ID</td>
            <td className={cx('col2', 'sm12', 'mobData')}>{data.id}</td>
            <td className={cx('sm4', 'visibleSm', 'mobLabel')}>Description</td>
            <td className={cx('col4', 'sm12', 'mobData')}>
                {
                    data.data.map((value) => renderDes(value))
                }
            </td>
            <td className={cx('sm4', 'visibleSm', 'mobLabel')}>Created By</td>
            <td className={cx('col3', 'sm12', 'mobData')}>{data.createdBy}</td>
            <td className={cx('sm4', 'visibleSm', 'mobLabel')}>Actions</td>
            <td className={cx('col2', 'sm12', 'mobData')}>
                <Button onClickEvent={(e) => {onEdit(e, index)}} text="Edit" btnType="btn-secondary"/>
                <Button onClickEvent={(e) => {onDelete(e, index)}} text="Delete" btnType="btn-secondary"/>
            </td>
        </tr>
    )
}

export default RulesList;
