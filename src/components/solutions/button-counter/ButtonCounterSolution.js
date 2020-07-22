import React from 'react'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Typography from '@material-ui/core/Typography'

const containerStyle = {
  margin: '5%',
}

const cardTitle = <Typography variant={'h3'}>Button Counter</Typography>

class ButtonCounter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 11,
    }
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 })
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 })
  };

  increaseByFive = () => {
    this.setState({ count: this.state.count + 5 })
  };

  decreaseByFive = () => {
    this.setState({ count: this.state.count - 5 })
  };

  resetCount = () => {
    this.setState({ count: 0 })
  };

  render = () => {
    return (
      <Card style={containerStyle}>
        <CardHeader title={cardTitle} />
        <CardContent>
          <Typography variant={'h5'}>
            Current Count: {this.state.count}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size={'large'}
            variant={'contained'}
            onClick={this.decreaseByFive}
          >
            -5
          </Button>
          <Button size={'large'} variant={'contained'} onClick={this.decrement}>
            -1
          </Button>
          <Button
            size={'large'}
            variant={'contained'}
            onClick={this.resetCount}
          >
            RESET
          </Button>
          <Button size={'large'} variant={'contained'} onClick={this.increment}>
            +1
          </Button>
          <Button
            size={'large'}
            variant={'contained'}
            onClick={this.increaseByFive}
          >
            +5
          </Button>
        </CardActions>
      </Card>
    )
  };
}

export default ButtonCounter
