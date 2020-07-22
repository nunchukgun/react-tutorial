import React from 'react'
import Card from '@material-ui/core/Card'
import TextField from '@material-ui/core/TextField'
import { useDispatch, useSelector } from 'react-redux'

const OrangeCard = () => {
  const dispatch = useDispatch()
  const messageText = useSelector(
    (state) => state.reduxIntroSolution.messageText
  )

  const handleChange = (event) => {
    const action = {
      type: 'SOLUTIONS_UPDATE_MESSAGE_TEXT',
      newMessageText: event.target.value,
    }
    dispatch(action)
  }

  return (
    <Card style={{ padding: '5%', backgroundColor: 'darkorange' }}>
      <TextField fullWidth value={messageText} onChange={handleChange} />
    </Card>
  )
}

export default OrangeCard
