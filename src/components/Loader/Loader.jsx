import { MutatingDots } from 'react-loader-spinner'
import React, { Component } from "react";
import { LoaderWrap } from "../Emotion.styled";

export class Loader extends Component {
  render() { 

      return (
        <LoaderWrap> <MutatingDots 
  height="100"
  width="100"
  color="#3f51b5"
  secondaryColor= '#303f9f'
  radius='12.5'
  ariaLabel="mutating-dots-loading"
  visible={true}
/></LoaderWrap>
    );
  }
}