import filter from 'lodash/filter';

const setPlaceHolders = (updatedState, ruleId, catagorey, index) => {
    const selectedRule = filter(catagorey, { id: ruleId });
    if (selectedRule && selectedRule[0].isMinMax) {
        updatedState.focusedRule.data[index].minPlaceHolder = selectedRule[0].minPlaceHolder;
        updatedState.focusedRule.data[index].maxPlaceHolder = selectedRule[0].maxPlaceHolder;
        updatedState.focusedRule.data[index].placeHolder = '';
    } else {
        updatedState.focusedRule.data[index].placeHolder = selectedRule[0].placeHolder;
        updatedState.focusedRule.data[index].minPlaceHolder = '';
        updatedState.focusedRule.data[index].maxPlaceHolder = '';
    }
    updatedState.focusedRule.data[index].maxLength = selectedRule[0].lengthLimit;
    updatedState.focusedRule.data[index].isMultiValue = selectedRule[0].isMultiValue || false;
    return updatedState;
}

const duplicate = (arr) => {
    const object = {};
    const result = [];

    arr.forEach(item => {
      if(!object[item])
          object[item] = 0;
        object[item] += 1;
    })

    for (const prop in object) {
       if(object[prop] >= 2) {
           result.push(prop);
       }
    }

    return result;

}


export default {
    setPlaceHolders,
    duplicate
}