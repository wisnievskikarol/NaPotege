import React from "react";
interface Props {
  time: string;
  img: string;
  title: string;
  name: string;
  presentation_description: string;
  speaker_description: string;
}
const SpeakerCard = (props: Props) => {
  return (
    <div>
      <p>{props.time}</p>
      <div>
        <img src={props.img} />
        <div>
          <h4>{props.title}</h4>
          <p>{props.name}</p>
          <p>{props.speaker_description}</p>
          <p>{props.presentation_description}</p>
        </div>
      </div>
    </div>
  );
};

export default SpeakerCard;
