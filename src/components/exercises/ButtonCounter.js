import React from 'react'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

const containerStyle = {
    margin: '5%'
}

const cardTitle = <Typography variant={'h3'}>Button Counter</Typography>

class ButtonCounter extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            count: 0
        }
    }
    
    increment = () => {this.setState({count: this.state.count + 1})}
    
    render = () => {
        return (
            <Card style={containerStyle}>
                <CardHeader title={cardTitle}/>
                <CardContent>
                    <Typography variant={'h5'}>
                        Current Count: {this.state.count}
                    </Typography>
                    <Button size={'large'} variant={'contained'} onClick={this.increment}>
                        +1
                    </Button>
                </CardContent>
            </Card>
        )
    }
}

export default ButtonCounter
