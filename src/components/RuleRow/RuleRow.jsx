import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames/bind';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import get from 'lodash/get';
import Catagorey from '../Catagorey/Catagorey';
import Validation from '../Validation/Validation';
import Value from '../Value/Value';
import Button from '../Button/Button';
import Input from '../Input/Input';
import { deleteRule } from '../../actions/RuleActions';
import * as styles from  './RuleRow.css';

const cx = classNames.bind(styles);

export const RuleRow = (props) => {
    const { index, data, length, actions, isEdit } = props;
    const { enableValueField } = data;
    const showDelete = length > 1 ? true : false;
    const deleteEvent = () => {
        actions.deleteRule({index});
    }
    return (
        <div className={cx('ruleRowCont')}>
            <div className={cx('ruleRowCatCont')}>
                <Catagorey index={index} data={data.catagorey.id} />
            </div>
            <div className={cx('ruleRowRuleCont')}>
                <Validation index={index} data={data.rule.id} />
            </div>
            <div className={cx('ruleRowValCont')}>
                { (enableValueField || isEdit) ? <Value data={data} index={index} /> : <Input disabled /> }
            </div>
            <div className={cx('ruleRowBtnCont')}>
                {(showDelete) && <Button btnType="btn-secondary" onClickEvent={deleteEvent} text="Delete" />}
            </div>

        </div>
    )
}

const mapStateToProps = (state) => {
    const focusedRule = get(state, 'data.focusedRule', {});
    return {
        focusedRule: { ...focusedRule },
    };
  };

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(
        {
            deleteRule,
        },
        dispatch,
    ),
});
  
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(RuleRow);
// export default RuleRow;
