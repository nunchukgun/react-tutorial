import React from "react";
import Card from "@material-ui/core/Card";
import OrangeCard from "./OrangeCard";

class BlueCard extends React.Component {
  render = () => {
    const onChangeHandler = this.props.changeMessageText;
    const textToChange = this.props.messageText;

    return (
      <Card style={{ padding: "5%", backgroundColor: "steelblue" }}>
        <OrangeCard
          onChangeHandler={onChangeHandler}
          textToChange={textToChange}
        />
      </Card>
    );
  };
}

export default BlueCard;
