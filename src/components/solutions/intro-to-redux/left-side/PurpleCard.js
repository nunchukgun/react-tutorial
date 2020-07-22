import React from 'react'
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'
import { connect } from 'react-redux'

const PurpleCard = (props) => {
  return (
    <Card style={{ padding: '5%', backgroundColor: 'orchid' }}>
      <Typography variant={'h3'}>{props.messageText}</Typography>
    </Card>
  )
}

const mapStateToProps = (state) => {
  return {
    messageText: state.reduxIntroSolution.messageText,
  }
}

export default connect(mapStateToProps)(PurpleCard)
