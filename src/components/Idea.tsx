import React from "react";
import Container from "@mui/material/Container";
import Card from "./Card";
import Description from "./Description";
import LightBulb from "../assets/light_bulb.png";
import Knowledge from "../assets/knovelage-icon.svg";
import People from "../assets/people-icon.svg";
import Grid from "@mui/material/Grid";
import Segments from "./Segments";
const Idea = () => {
  return (
    <Container maxWidth="xl">
      <h2 className="idea-title">Nasza Idea</h2>
      <div className="idea-cards">
        <Grid container spacing={6}>
          <Grid item xs={12} md={4}>
            <Card
              icon={LightBulb}
              title={"Świeżość spojrzenia"}
              description={
                "Nasze spotkania dają głębszy oglą na rzeczywistość oraz pobudzają kreatywność\n" +
                "poprzez wzajemną rozmowę i obcowanie z eksprertami w dziedzinie."
              }
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <Card
              icon={Knowledge}
              title={"Praktyczna wiedza"}
              description={
                "Wesprzemy Cię w pokonaniu przeszkód i trudności na drodze do realizacji swoich planów biznesowych.\n" +
                "Damy Ci narzedzia i zainicjujemy różnego rodzaju procesy, z którymi zwklekasz."
              }
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <Card
              icon={People}
              title={"Istotne kontakty"}
              description={
                "To z kim spędzamy czas toruje nasze myślenie. Dobór uczestników danego spotkania ma na celu\n" +
                "połączenie ich potrzeb, to również gwarancja świetnej atmosfery."
              }
            />
          </Grid>
        </Grid>
      </div>

      <Description />

      <Segments />
    </Container>
  );
};

export default Idea;
