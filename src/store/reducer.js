const defaultState = {
  value:'cwww',
  list:[]
}

export default function reducer(state = defaultState,action) {
  switch (action.type){
    case 'changeInput':
      return {...state,value:action.value}
    case 'add_item':
      let newAddState = !state.value ? state : { ...state, list: [...state.list, state.value] }
      newAddState.value = ''
      return newAddState
    default:
      return state
  }
};
