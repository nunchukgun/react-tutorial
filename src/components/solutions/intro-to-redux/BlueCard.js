import React from 'react'
import Card from '@material-ui/core/Card'
import OrangeCard from './OrangeCard'

const BlueCard = (props) => {
  return (
    <Card style={{ padding: '5%', backgroundColor: 'steelblue' }}>
      <OrangeCard />
    </Card>
  )
}

export default BlueCard
