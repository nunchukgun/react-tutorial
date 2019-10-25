import React from 'react'
import Card from '@material-ui/core/Card'
import TextField from '@material-ui/core/TextField'

class OrangeCard extends React.Component {
    render = () => {
        return (
            <Card style={{padding: '5%', backgroundColor: 'darkorange'}}>
                <TextField
                    fullWidth
                    value={this.props.textToChange}
                    onChange={this.props.onChangeHandler}
                />
            </Card>
        )
    }
}

export default OrangeCard
