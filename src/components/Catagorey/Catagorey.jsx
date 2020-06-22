import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames/bind';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import get from 'lodash/get';
import DropDown from '../DropDown/DropDown';
import { changeCatagorey } from '../../actions/RuleActions';
import { catagoreyList } from '../../config';
import * as styles from  './Catagorey.css';

const cx = classNames.bind(styles);

export const Catagorey = (props) => {
    const { actions, index, data } = props;
    
    const onChangeEvent = (value) => {
        actions.changeCatagorey({ value, index, type: 'catagorey' });
    }
    return (
        <div>
            <DropDown
                source={catagoreyList}
                onChange={onChangeEvent}
                defaultValue={data}
            />
        </div>
    )
}

const mapStateToProps = (state) => {
    const focusedRule = get(state, 'data.focusedRule');
    return {
        focusedRule,
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
  )(Catagorey);
