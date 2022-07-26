import React from "react";
interface Props {
  icon: string;
  title: string;
  description: string;
}
const Card = (props: Props) => {
  return (
    <div className="card-container">
      <img src={props.icon} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
};

export default Card;
