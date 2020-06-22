import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import get from 'lodash/get';
import classNames from 'classnames/bind';
import RuleRow from '../RuleRow/RuleRow';
import Button from '../Button/Button';
import { addNewRule, submitEvent } from '../../actions/RuleActions';
import * as styles from  './RuleEditor.css';

const cx = classNames.bind(styles);

class RuleEditor extends Component {
  constructor() {
    super();
    this.addAnotherRowEvent = this.addAnotherRowEvent.bind(this);
  }

  static propTypes = {
    focusedRule: PropTypes.objectOf(PropTypes.object),
  };

  static defaultProps = {
    focusedRule: {},
  };
  addAnotherRowEvent = () => {
    this.props.actions.addNewRule();
  }
  submitEvent = () => {
      const { focusedRule, actions } =  this.props;
      let id;
      if (focusedRule && focusedRule.id) {
        id = focusedRule.id;
      }
      actions.submitEvent({ id });
  }
  render() {
    const { focusedRule, isEdit, onClose, errorMessage } = this.props;
    let data;
    if (focusedRule) {
      data = focusedRule.data;
    }
      return(
          <div>
            <React.Fragment>
              {data.map((item, index) => <RuleRow index={index} data={item} length={data.length} isEdit={isEdit} />
              )}
            </React.Fragment>
            <div className={cx('bottomBtnCont')}>
                <Button btnType="btn-secondary-1" disabled={!focusedRule.enableSaveButton} onClickEvent={this.addAnotherRowEvent} text="Add another" />
                <Button disabled={!focusedRule.enableSaveButton} onClickEvent={this.submitEvent} text="Save" />
                <Button btnType="btn-secondary-1" onClickEvent={onClose} text="Cancel" />
                {errorMessage && <p className={cx('errorMessage')}>{errorMessage}</p>}
            </div>
          </div>
      )
  }
}

const mapStateToProps = (state) => {
    const focusedRule = get(state, 'data.focusedRule', {});
    const errorMessage = get(state, 'data.errorMsg', false);
    return {
      focusedRule: { ...focusedRule },
      errorMessage
    };
  };
  
  const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(
      {
        addNewRule,
        submitEvent
      },
      dispatch,
    ),
  });
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps,
  )(RuleEditor);