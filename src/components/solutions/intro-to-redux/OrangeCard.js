import React from 'react'
import Card from '@material-ui/core/Card'
import TextField from '@material-ui/core/TextField'
import {updateMessageText} from './ReduxIntroSolutionActions'
import {connect} from 'react-redux'

const OrangeCard = (props) => {
    
    const {
        messageText,
        updateMessageText
    } = props
    
    const handleChange = (event) => {
        updateMessageText(event.target.value)
    }
    
    return (
        <Card style={{padding: '5%', backgroundColor: 'darkorange'}}>
            <TextField
                fullWidth
                value={messageText}
                onChange={handleChange}
            />
        </Card>
    )
}

const mapStateToProps = (state) => ({
    messageText: state.reduxIntroSolution.messageText
})

const actions = {
    updateMessageText
}

export default connect(mapStateToProps, actions)(OrangeCard)
