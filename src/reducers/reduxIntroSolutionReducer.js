const initialState = {
  messageText: 'redux solution default',
}

export default (state = initialState, action) => {
  console.dir(state)
  switch (action.type) {
    case 'SOLUTIONS_UPDATE_MESSAGE_TEXT':
      console.dir('in expected action handler')
      return {
        ...state,
        messageText: action.newMessageText,
      }
    default:
      console.dir('in default case')
      return state
  }
}
