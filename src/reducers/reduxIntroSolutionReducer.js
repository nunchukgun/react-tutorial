const initialState = {
  messageText: 'redux solution default',
}

export default (state = initialState, action) => {
  console.dir(state)
  switch (action.type) {
    case 'SOLUTIONS_UPDATE_MESSAGE_TEXT':
      return {
        ...state,
        messageText: action.newMessageText,
      }
    default:
      return state
  }
}
