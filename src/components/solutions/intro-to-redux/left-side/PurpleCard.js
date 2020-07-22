import React from 'react'
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'
import { useSelector } from 'react-redux'

const PurpleCard = () => {
  const messageText = useSelector(
    (state) => state.reduxIntroSolution.messageText
  )
  return (
    <Card style={{ padding: '5%', backgroundColor: 'orchid' }}>
      <Typography variant={'h3'}>{messageText}</Typography>
    </Card>
  )
}

export default PurpleCard
