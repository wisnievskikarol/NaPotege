import React from "react";
import SpeakerCard from "./ SpeakerCard";
import Photo from "../assets/prelegent-photo.png";
const Meetings = () => {
  return (
    <div>
      <h3>Najbliższe spotkanie</h3>
      <div>
        <p>Agenda</p>
        <span>
          <p>12</p>
          <span>
            <p>Lipca</p>
            <p>2022</p>
          </span>
        </span>
      </div>

      <div>
        <p>Brainstorming</p>
        <p>Wstęp: wolny</p>
        <p>Limit dostępnych miejsc : 12</p>
      </div>
      <SpeakerCard
        img={Photo}
        name={"Lorem ipsum"}
        presentation_description={"Lorem ipsum"}
        speaker_description={"lorem ipsum"}
      />
    </div>
  );
};

export default Meetings;
