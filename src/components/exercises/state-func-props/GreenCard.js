import React from 'react'
import Card from '@material-ui/core/Card'
import BlueCard from './BlueCard'

class GreenCard extends React.Component {
  render = () => {
    return (
      <Card style={{ padding: '5%', backgroundColor: 'yellowgreen' }}>
        <BlueCard />
      </Card>
    )
  };
}

export default GreenCard
