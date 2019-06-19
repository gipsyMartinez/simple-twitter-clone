import React from "react";
import styles from "./wall.style";

const Wall = props => (
  <ul>
    {props.items.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
    <style jsx>{styles}</style>
  </ul>
);

export default Wall;
