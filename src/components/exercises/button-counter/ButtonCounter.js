import React from 'react'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import CardActions from '@material-ui/core/CardActions'

const containerStyle = {
    margin: '5%'
}

const cardTitle = <Typography variant={'h3'}>Button Counter</Typography>

class ButtonCounter extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            count: 11
        }
    }
    
    resetCount = () => {
        this.setState({count: 0})
    }
    
    render = () => {
        return (
            <Card style={containerStyle}>
                <CardHeader title={cardTitle}/>
                <CardContent>
                    <Typography variant={'h5'}>
                        Current Count: {this.state.count}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size={'large'} variant={'contained'} onClick={this.resetCount}>
                        RESET
                    </Button>
                </CardActions>
            </Card>
        )
    }
}

export default ButtonCounter
