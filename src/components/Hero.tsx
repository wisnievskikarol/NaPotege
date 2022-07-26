import React from "react";
import HeroImg from "../assets/hero-img.png";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
const Hero = () => {
  return (
    <Container maxWidth="xl">
      <Grid container spacing={1}>
        <Grid item xs={12} md={6}>
          <div className="hero-text-container">
            <div className="hero-text-container-div">
              <h1>Dołącz na nasze nabliższe spotkanie w Warszawie</h1>
              <h1>już 13 sierpnia!</h1>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <img className="hero-img" src={HeroImg} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Hero;
