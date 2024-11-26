import React, { Component } from "react";

class FeelingProud extends Component {
  handleImageClick = () => {
    alert("Image clicked!");
  };

  render() {
    const theme = this.props.theme;

    return (
      <img
        src="/images/proj.png"
        alt="Feeling Proud"
       
        
      />
    );
  }
}

export default FeelingProud;

