import React from 'react'
import Card from '@material-ui/core/Card'
import BlueCard from './BlueCard'

class GreenCard extends React.Component {
  render = () => {
    const { changeMessageText, messageText } = this.props

    return (
      <Card style={{ padding: '5%', backgroundColor: 'yellowgreen' }}>
        <BlueCard
          changeMessageText={changeMessageText}
          messageText={messageText}
        />
      </Card>
    )
  };
}

export default GreenCard
