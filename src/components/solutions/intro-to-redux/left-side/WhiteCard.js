import React from 'react'

import { Card, CardHeader, CardContent, Typography } from '@material-ui/core'
import PurpleCard from './PurpleCard'

const WhiteCard = () => {
  return (
    <Card>
      <CardHeader title={<Typography>Displayed Message Text: </Typography>} />
      <CardContent>
        <PurpleCard />
      </CardContent>
    </Card>
  )
}

export default WhiteCard
