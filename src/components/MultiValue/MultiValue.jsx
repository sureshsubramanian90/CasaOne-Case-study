import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames/bind';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import get from 'lodash/get';
import { changeCatagorey } from '../../actions/RuleActions';
import Input from '../Input/Input';
import Button from '../Button/Button';
import * as styles from  './MultiValue.css';

const cx = classNames.bind(styles);

export const MultiValue = (props) => {
  const { placeHolder, value, index, actions, length } = props;
  const onChangeEvent = (val, i) => {
    actions.changeCatagorey({ 
      value: val,
      index,
      isMulVal: true,
      type: 'value',
      valIndex: i,
      length
    });
  }
  const addOrDeleteEvent = (isAdd, i) => {
    actions.changeCatagorey({ 
      value: '',
      index,
      isMulVal: true,
      type: 'value',
      valIndex: i,
      removeVal: isAdd,
      length
    });
  }

  const render = (val, i) => {
    let index = i;
    return (
      <div className={cx('mulValCont')}>
        {value.length > 1 && <Button
          text="&times;"
          btnType="btn-secondary"
          theme={cx('mulCloseBtn')}
          onClickEvent={() => addOrDeleteEvent(true, i)}
        />}
        <div className={cx('mulValAdCont')}>
          <div className={cx('mulValInpCont')}>
            <Input onChange={onChangeEvent} placeHolder = {placeHolder} value={val} maxLength={length} index={i}/>
          </div>
          <div className={cx('mulValAdbtnCont')}>
            {(val.length === length && ((index+=1) === value.length)) && <Button 
              text="Add"
              btnType="btn-secondary"
              onClickEvent={() => addOrDeleteEvent(false, value.length)}
            />}
          </div>
          
        </div>
        
      </div> 
    )
  }
  return (
    <React.Fragment>
      {value.map((val, i) => render(val, i))}
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
)(MultiValue);
