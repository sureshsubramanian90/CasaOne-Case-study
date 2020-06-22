import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import get from 'lodash/get';
import classNames from 'classnames/bind';
import Layout from '../../../components/Layout/Layout';
import Modal from '../../../components/Modal/Modal';
import Button from '../../../components/Button/Button';
import RulesList from '../../../components/RulesList/RulesList';
import RuleEditor from '../../../components/RuleEditor/RuleEditor';
import { exampleAction, initNewRule, editRule, deleteRuleList, toggleModal } from '../../../actions/RuleActions';
import * as styles from  './Home.css';

const cx = classNames.bind(styles);

class Home extends Component {
  constructor() {
    super();
    this.state = {
      modalTitle: "Add you rule",
    };
    this.showRuleModal = this.showRuleModal.bind(this);
    this.onModalClose = this.onModalClose.bind(this);
    this.onEditRule = this.onEditRule.bind(this);
    this.onDeleteRule = this.onDeleteRule.bind(this);
  }

  static propTypes = {
    data: PropTypes.objectOf(PropTypes.object),
  };

  static defaultProps = {
    data: {},
  };

  componentDidMount() {
    this.props.actions.exampleAction();
  }

  showRuleModal = () => {
    this.props.actions.initNewRule();
  }

  onModalClose = () => {
    this.props.actions.toggleModal();
  }
  onEditRule = (e, index) => {
    this.props.actions.editRule({index})
  }

  onDeleteRule = (e, index) => {
    this.props.actions.deleteRuleList({index})
  }
  render() {
    const { data, showEditModal, showAddModal, serviceError } = this.props;
    let showModal = false;
    let modalTitle = 'Add Rule';
    if (showEditModal) {
      showModal = true;
      modalTitle = 'Edit Rule';
    } else if(showAddModal) {
      showModal = true;
    }
    return (
      <Layout>
        <div className={cx('rulesContainer')}>
          <h1 className={cx('text-center', 'rules-heading')}>Rules Editor</h1>
          {serviceError && <p className={cx('serviceError')}>{serviceError}</p>}
          <div className={cx("tableContainer")}>
            <table className={cx("tableEle")}>
              <thead className={cx("tableHead")}>
                <tr className={cx("tableRow", "row")}>
                  <th className={cx('col1', 'colPadding')}>S.NO</th>
                  <th className={cx('col2')}>ID</th>
                  <th className={cx('col4')}>Description</th>
                  <th className={cx('col3')}>Created By</th>
                  <th className={cx('col2')}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {data && data.map((item, index) => <RulesList
                  data={item}
                  index={index}
                  onEdit={this.onEditRule}
                  onDelete={this.onDeleteRule} />)}
              </tbody>
            </table>
          </div>
          <Button onClickEvent={this.showRuleModal} text="Add Rule" />
          {showModal && <Modal
            showModal
            title={modalTitle}
            onClose={this.onModalClose}
          >
              <RuleEditor 
                onClose={this.onModalClose}
                isEdit={showEditModal}
              />
          </Modal>}
        </div>
      </Layout>
    );
  }
}

const mapStateToProps = (state) => {
  const data = get(state, 'data.rulesList', []);
  const showEditModal = get(state, 'data.showEditModal', false);
  const showAddModal = get(state, 'data.showAddModal', false);
  const serviceError = get(state, 'data.serviceError', []);
  return {
    data,
    showAddModal,
    showEditModal,
    serviceError,
  };
};

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    {
      exampleAction,
      initNewRule,
      editRule,
      deleteRuleList,
      toggleModal
    },
    dispatch,
  ),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
