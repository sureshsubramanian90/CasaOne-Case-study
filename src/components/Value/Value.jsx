import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames/bind';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import get from 'lodash/get';
import { changeCatagorey } from '../../actions/RuleActions';
import MultiValue from '../MultiValue/MultiValue';
import Input from '../Input/Input';
import * as styles from  './Value.css';

const cx = classNames.bind(styles);

export const Value = (props) => {
  const { actions, index, data, focusedRule } = props;
  const { minPlaceHolder, maxPlaceHolder, placeHolder, isMultiValue, value, maxLength } = data;
  const onChangeEvent = (e, isVal, isMin, isMax) => {
      actions.changeCatagorey({ 
        value: e, 
        index,
        isVal,
        isMin,
        isMax,
        type: 'value',
        length: maxLength
      });
  }
  return (
      <React.Fragment>
        { !isMultiValue ? <React.Fragment>
          {placeHolder ? 
            <Input placeHolder={placeHolder} value={value[0]} onChange={(e) => {onChangeEvent(e, true)}} /> :
            <React.Fragment>
              <Input theme={cx('minInput')} type="number" placeHolder = {minPlaceHolder} value={value[0]} onChange={(e) => {onChangeEvent(e, false, true)}} />
              <Input theme={cx('maxInput')} type="number" placeHolder = {maxPlaceHolder} value={value[1]} onChange={(e) => {onChangeEvent(e, false, false, true)}} />
            </React.Fragment>
          }
        </React.Fragment> : <MultiValue
          placeHolder={placeHolder}
          value={value}
          index={index}
          length={maxLength}
        />}
      </React.Fragment>
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
)(Value);
