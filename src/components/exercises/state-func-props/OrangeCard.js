import React from 'react'
import Card from '@material-ui/core/Card'
import TextField from '@material-ui/core/TextField'

class OrangeCard extends React.Component {
    render = () => {
        return (
            <Card style={{padding: '5%', backgroundColor: 'darkorange'}}>
                <TextField
                    fullWidth
                    value={'This value is immutable'}
                    onChange={() => alert('onChange handler called')}
                />
            </Card>
        )
    }
}

export default OrangeCard
