import React, { Component } from "react";
import { ErrorMassage} from "../Emotion.styled";

export class Error extends Component {
  render() { 

    return (
      <ErrorMassage>
        <h2>{this.props.children}</h2> 
      </ErrorMassage>
    );
  }
}