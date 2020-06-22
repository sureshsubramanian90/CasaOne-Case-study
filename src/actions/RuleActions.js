import { GET_DATA, INIT_NEW_RULE, UPDATE_FOCUSED_RULE,
  ADD_NEW_RULE, DELETE_RULE, EDIT_RULE, DELETE_RULE_FROM_LIST, TOGGLE_EDIT_MODAL,
  SUBMIT_DATA } from '../actionTypes/RuleActionTypes';

export const exampleAction = (payload) => ({
  type: GET_DATA,
  payload,
});

export const initNewRule = (payload) => ({
  type: INIT_NEW_RULE,
  payload,
});

export const addNewRule = (payload) => ({
  type: ADD_NEW_RULE,
  payload,
});

export const deleteRule = (payload) => ({
  type: DELETE_RULE,
  payload,
});

export const editRule = (payload) => ({
  type: EDIT_RULE,
  payload,
});

export const deleteRuleList = (payload) => ({
  type: DELETE_RULE_FROM_LIST,
  payload,
});

export const changeCatagorey = (payload) => ({
  type: UPDATE_FOCUSED_RULE,
  payload,
});

export const toggleModal = () => ({
  type: TOGGLE_EDIT_MODAL,
})

export const submitEvent = (payload) => ({
  type: SUBMIT_DATA,
  payload
})

