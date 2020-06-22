import forEach from 'lodash/forEach';
import clone from 'lodash/clone';
import { GET_DATA_SUCCESS,
  INIT_NEW_RULE,
  UPDATE_FOCUSED_RULE,
  ADD_NEW_RULE,
  DELETE_RULE,
  EDIT_RULE,
  DELETE_RULE_FROM_LIST,
  GET_DATA_ERROR,
TOGGLE_EDIT_MODAL } from '../actionTypes/RuleActionTypes';
import { rule, message } from '../config';
import aggregator from '../aggregator/aggregator';

// const ruleObj = {
//   catagorey: {
//     id: ''
//   },
//   rule: {
//     id: ''
//   },
//   value: [],
// };

// const focusedRule = {
//   data: [],
//   enableSaveButton: false,
// }

export default function RuleReducer(state = {}, action = {}) {
  switch (action.type) {
    case GET_DATA_SUCCESS: {
      return {
        rulesList: action.data,
        serviceError: false
      };
    }

    case GET_DATA_ERROR: {
      return {
        ...state,
        serviceError: action.error.errorMessage
      }
    }
    case INIT_NEW_RULE: {
      state.focusedRule = {
        data: [],
        enableSaveButton: false,
      };
      state.focusedRule.data.push(
        {
          catagorey: {
            id: ''
          },
          rule: {
            id: ''
          },
          value: [],
        }
      );
      state.showAddModal = true;
      return { ...state };
    }

    case EDIT_RULE: {
      const { index } = action.payload;
      let updatedState = { ...state };
      updatedState.showEditModal = true;
      updatedState.focusedRule = {
        data: [],
        enableSaveButton: false,
      };;
      updatedState.focusedRule.data = updatedState.rulesList[index].data;
      updatedState.focusedRule.currentId = updatedState.rulesList[index].id;
      forEach(updatedState.focusedRule.data, (item, index) => {
        const catagoreyId = updatedState.focusedRule.data[index].catagorey.id;
        const ruleId = updatedState.focusedRule.data[index].rule.id;
        let catagorey = rule[catagoreyId];
        if (catagorey.length === 1) {
          updatedState.focusedRule.data[index].rule.id = catagorey[0].id;
        }
        if (catagoreyId && ruleId) {
          updatedState.focusedRule.data[index].enableValueField = true;
          updatedState = aggregator.setPlaceHolders(updatedState, ruleId, catagorey, index);
        }
      })
      return { ...updatedState };
    }

    case TOGGLE_EDIT_MODAL: {
      state.showEditModal = false;
      state.showAddModal = false;
      state.focusedRule = {};
      return { ...state };
    }

    case ADD_NEW_RULE: {
      state.focusedRule.data.push(
        {
          catagorey: {
            id: ''
          },
          rule: {
            id: ''
          },
          value: [],
        }
      );
      state.focusedRule.enableSaveButton = false;
      return { ...state };
    }

    case DELETE_RULE: {
      const { index } = action.payload;
      state.focusedRule.data.splice(index, 1);
      return { ...state };
    }

    case UPDATE_FOCUSED_RULE: {
      const { index, type, isVal, isMin, isMax, valIndex, removeVal, isMulVal, length } = action.payload;
      let { value } = action.payload;
      let updatedState = { ...state };
      updatedState.errorMsg = '';
      let catagorey = [];
      if (type === 'catagorey') {
        updatedState.focusedRule.data[index][type].id = value;
        updatedState.focusedRule.data[index].rule.id = '';
        updatedState.focusedRule.data[index].value = [];
      } else if (type === 'value') {
        if (length && length < value.length) {
          value = value.slice(0, value.length - 1);
        }
        if (isVal || isMin) {
          updatedState.focusedRule.data[index][type][0] = value;
        } else if (isMax) {
          const minVal = updatedState.focusedRule.data[index][type][0];
          if(minVal && value < minVal) {
            updatedState.errorMsg = message.maxVal;
          } else {
            updatedState.errorMsg = '';
          }
          updatedState.focusedRule.data[index][type][1] = value;
        } else if(isMulVal) {
          if(!removeVal) {
            updatedState.focusedRule.data[index][type][valIndex] = value;
          } else {
            updatedState.focusedRule.data[index][type].splice(valIndex, 1);
          }
        }
      } else {
        updatedState.focusedRule.data[index][type].id = value;
        updatedState.focusedRule.data[index].value = [];
      }
      const catagoreyId = updatedState.focusedRule.data[index].catagorey.id;
      catagorey = rule[catagoreyId];
      if (catagorey.length === 1 && type !== 'value') {
        updatedState.focusedRule.data[index].rule.id = catagorey[0].id;
        updatedState.focusedRule.data[index].value[0] = '';
      }
      const ruleId = updatedState.focusedRule.data[index].rule.id;
      if (catagoreyId && ruleId) {
        updatedState.focusedRule.data[index].enableValueField = true;
        updatedState = aggregator.setPlaceHolders(updatedState, ruleId, catagorey, index);
      } else {
        updatedState.focusedRule.data[index].enableValueField = false;
        updatedState.focusedRule.data[index].minPlaceHolder = '';
        updatedState.focusedRule.data[index].maxPlaceHolder = '';
        updatedState.focusedRule.data[index].placeHolder = '';
        updatedState.focusedRule.data[index].isMultiValue = false;
      }
      let enableSaveButton = false;
      if (!updatedState.errorMsg) {
        for (let i = 0; i < updatedState.focusedRule.data.length; i++) {
          const data = updatedState.focusedRule.data[i];
          if (data.catagorey.id && data.rule.id) {
            const catagoreyConfig = rule[data.catagorey.id];
            if (catagoreyConfig[0].lengthLimit) {
              for (let j=0;j < data.value.length; j++) {
                if(data.value[j].length === catagoreyConfig[0].lengthLimit) {
                  enableSaveButton = true;
                } else {
                  enableSaveButton = false;
                  j = data.value.length;
                  i = updatedState.focusedRule.data.length;
                }
                if (enableSaveButton) {
                  const arr = aggregator.duplicate(data.value);
                  console.log('****arr', arr)
                  if (arr.length) {
                    enableSaveButton = false;
                    updatedState.errorMsg = "Fields cannot have same value."
                  } else {
                    enableSaveButton = true;
                    updatedState.errorMsg = "";
                  }
                }
              }
            } else if (data.value.length > 0 && (!data.minPlaceHolder || data.isMultiValue)) {
              enableSaveButton = true;
            } else if (data.value.length === 2 && data.minPlaceHolder) {
              enableSaveButton = true;
            } else {
              enableSaveButton = false;
              i = updatedState.focusedRule.data.length;
            }
          }
        }
      }
      
      updatedState.focusedRule.enableSaveButton = enableSaveButton;
      
      console.log('***********state', Object.assign({}, state, updatedState));
      return { ...updatedState }
    }
    default:
      return state;
  }
}
