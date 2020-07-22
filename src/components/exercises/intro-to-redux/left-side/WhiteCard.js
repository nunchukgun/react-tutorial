import React from 'react'
import { Card, CardHeader, CardContent, Typography } from '@material-ui/core'
import PurpleCard from '../../../solutions/intro-to-redux/PurpleCard'

const WhiteCard = (props) => {
  const { messageText } = props
  return (
    <Card>
      <CardHeader title={<Typography>Displayed Message Text: </Typography>} />
      <CardContent>
        <PurpleCard messageText={messageText} />
      </CardContent>
    </Card>
  )
}

export default WhiteCard
