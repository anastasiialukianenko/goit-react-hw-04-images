import React, { Component } from "react";
import { ErrorMassage} from "../Emotion.styled";


export function Error({children}) {
  return (
      <ErrorMassage>
        <h2>{children}</h2> 
      </ErrorMassage>
    );
}
