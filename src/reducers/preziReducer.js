export const preziReducer = (state = [], action) => {
  switch(action.type) {
    case 'SET_PRES':
      return action.pres
    default:
      return state
  }
}
