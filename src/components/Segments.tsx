import React from "react";
import Network from "../assets/bx_network-chart.svg";
import Brain from "../assets/fluent_brain-circuit-20-regular.svg";
import Tools from "../assets/carbon_tools-alt.svg";
import Card from "../components/Card";
import Grid from "@mui/material/Grid";
const Segments = () => {
  return (
    <div className="segments-container">
      <h4>Jak działamy?</h4>
      <p>Nasze spotkania podzielone są one na 3 segmenty:</p>
      <Grid container spacing={6}>
        <Grid item xs={12} md={4}>
          <Card
            icon={Brain}
            title={"Naukowy"}
            description={
              "wystąpienia prelegentów na tematy w obrębie danego motywu przewodniego"
            }
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Card
            icon={Tools}
            title={"Narzędziowy"}
            description={
              "dyskusja  po prelekcjach i rozwiązywanie problemów  uczestników związanych z danym tematem z prelegentami"
            }
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Card
            icon={Network}
            title={"Networkingowy"}
            description={
              "Rozmowy i inicjowane kontakty przy stolikach na podstawie tego, kto się czym zajmuje"
            }
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Segments;
