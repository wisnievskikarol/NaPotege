import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import PlaceImg from "../assets/place-img.png";
const Place = () => {
  return (
    <Container maxWidth="xl">
      <Grid container spacing={5}>
        <Grid item xs={12} md={5}>
          <div className="place-text">
            <h2 className="place-title">Miejsce</h2>
            <h3>Warsaw Financial Center</h3>
            <p>
              Jeden z najbardziej prestiżowych budynków w stolicy. Widok z 17
              piętra na panoramę centrum stolicy zagwarantuje czystość umysłu i
              przypływ inspiracji biznesowych wśród ludzi podobnych Tobie.
              Przyjdź na nasze spotkanie i spojrzyj z nami z góry na świat
              dostrzegając jego możliwości.
            </p>
          </div>
        </Grid>
        <Grid item xs={12} md={7}>
          <img className="place-img" src={PlaceImg} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Place;
