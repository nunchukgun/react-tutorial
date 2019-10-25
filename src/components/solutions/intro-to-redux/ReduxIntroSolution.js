import React from 'react'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import Typography from '@material-ui/core/Typography'
import GreenCard from './GreenCard'
import PurpleCard from './PurpleCard'
import CardContent from '@material-ui/core/CardContent'
import {connect} from 'react-redux'

const ReduxIntroSolution = (props) => {
    
    return (
        <div style={{margin: '5%'}}>
            <Grid container spacing={4}>
                <Grid item xs={6}>
                    <Card>
                        <CardHeader title={<Typography>Displayed Message Text: </Typography>}/>
                        <CardContent>
                            <PurpleCard/>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={6}>
                    <GreenCard/>
                </Grid>
            </Grid>
        </div>
    )
}


const mapStateToProps = (state) => ({
    messageText: state.reduxIntroSolution.messageText
})

export default connect(mapStateToProps)(ReduxIntroSolution)
