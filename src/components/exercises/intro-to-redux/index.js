import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid'
import GreenCard from './right-side/GreenCard'
import WhiteCard from './left-side/WhiteCard'

const ReduxIntro = () => {
  //Hint: drop the useState hook and employ `useSelector` from redux instead. Make sure you've set up your reducer first!
  const [messageText, setMessageText] = useState('default state value')
  return (
    <div style={{ margin: '5%' }}>
      <Grid container spacing={4}>
        <Grid item xs={6}>
          <WhiteCard messageText={messageText} />
        </Grid>
        <Grid item xs={6}>
          <GreenCard />
        </Grid>
      </Grid>
    </div>
  )
}

export default ReduxIntro
