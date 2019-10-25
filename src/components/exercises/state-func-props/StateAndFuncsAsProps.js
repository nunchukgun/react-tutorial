import React from 'react'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'
import GreenCard from './GreenCard'

class StateAndFuncsAsProps extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            messageText: 'default here'
        }
    }
    
    render = () => {
        return (
            <div style={{margin: '5%'}}>
                <Grid container spacing={4}>
                    <Grid item xs={6}>
                        <Card>
                            <Typography variant={'h3'}>
                                {this.state.messageText}
                            </Typography>
                        </Card>
                    </Grid>
                    <Grid item xs={6}>
                        <GreenCard/>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default StateAndFuncsAsProps
