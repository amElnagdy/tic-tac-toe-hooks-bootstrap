import React from "react";

const Square = (props) => {
  return <td onClick={props.onClick}>{props.value}</td>;
};

export default Square;
