import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import CardActions from '@material-ui/core/CardActions'

const containerStyle = {
  margin: '5%',
}

const cardTitle = <Typography variant={'h3'}>Button Counter</Typography>

const ButtonCounter = () => {
  const [count, setCount] = useState(11)

  return (
    <Card style={containerStyle}>
      <CardHeader title={cardTitle} />
      <CardContent>
        <Typography variant={'h5'}>Current Count: {count}</Typography>
      </CardContent>
      <CardActions>
        <Button
          size={'large'}
          variant={'contained'}
          onClick={() => setCount(0)}
        >
          RESET
        </Button>
      </CardActions>
    </Card>
  )
}

export default ButtonCounter
