import React from 'react'
import Card from '@material-ui/core/Card'
import OrangeCard from './OrangeCard'

class BlueCard extends React.Component {
    
    render = () => {
        return (
            <Card style={{padding: '5%', backgroundColor: 'steelblue'}}>
                <OrangeCard/>
            </Card>
        )
    }
}

export default BlueCard
