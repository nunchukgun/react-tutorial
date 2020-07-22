import React from 'react'
import Grid from '@material-ui/core/Grid'
import GreenCard from './GreenCard'
import { connect } from 'react-redux'
import WhiteCard from './left-side/WhiteCard'

class ReduxIntro extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      messageText: 'default here',
    }
  }

  render = () => {
    return (
      <div style={{ margin: '5%' }}>
        <Grid container spacing={4}>
          <Grid item xs={6}>
            <WhiteCard messageText={this.state.messageText} />
          </Grid>
          <Grid item xs={6}>
            <GreenCard />
          </Grid>
        </Grid>
      </div>
    )
  };
}

const mapStateToProps = () => ({})

export default connect(mapStateToProps)(ReduxIntro)
