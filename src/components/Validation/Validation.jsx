import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames/bind';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import get from 'lodash/get';
import DropDown from '../DropDown/DropDown';
import { changeCatagorey } from '../../actions/RuleActions';
import { rule } from '../../config';
import * as styles from  './Validation.css';

const cx = classNames.bind(styles);

export const Validation = (props) => {
    const { actions, index, data, focusedRule } = props;
    const onChangeEvent = (value) => {
        actions.changeCatagorey({ value, index, type: 'rule' });
    }
    let source = [];
    if (focusedRule && focusedRule.data && focusedRule.data[index] && focusedRule.data[index].catagorey.id) {
        source = rule[focusedRule.data[index].catagorey.id];
    }
    return (
        <div>
            <DropDown
                source={source}
                onChange={onChangeEvent}
                defaultValue={data}
            />
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
      changeCatagorey,
    },
    dispatch,
  ),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Validation);
