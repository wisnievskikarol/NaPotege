import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import PlaceImg from "../assets/place-img.png";
const Place = () => {
  return (
    <Container maxWidth="xl">
      <h2 className="place-title">Miejsce</h2>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <h3>Warsaw Financial Center</h3>
          <p>
            Jeden z najbardziej prestiżowych budynków w stolicy. Widok z 17
            piętra na panoramę centrum stolicy zagwarantuje czystość umysłu i
            przypływ inspiracji biznesowych wśród ludzi podobnych Tobie. Przyjdź
            na nasze spotkanie i spojrzyj z nami z góry na świat dostrzegając
            jego możliwości.
          </p>
        </Grid>
        <Grid item xs={6}>
          <img className="place-img" src={PlaceImg} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Place;
