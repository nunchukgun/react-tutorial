import React from 'react'
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'

class PurpleCard extends React.Component {
    
    render = () => {
        
        return (
            <Card style={{padding: '5%', backgroundColor: 'orchid'}}>
                <Typography variant={'h3'}>
                    {this.props.messageText}
                </Typography>
            </Card>
        )
    }
}

export default PurpleCard
