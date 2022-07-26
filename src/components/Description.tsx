import React from "react";
import Photo from "../assets/czym-jest-na-potege.png";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

const Description = () => {
  return (
    <div>
      <div className="description-title">
        <h2>Czym jest </h2>
        <h2>Na Potęgę?</h2>
      </div>

      <Grid container spacing={4}>
        <Grid item md={4}>
          <img className="description-img" src={Photo} />
        </Grid>
        <Grid item md={6}>
          <div>
            <h3>Inicjatywa biznesowa dla tych, którzy</h3>
            <ul className="description-list">
              <li>
                <p>
                  Posiadają świeży startup lub gotowe MVP i szukają środowiska,
                  które pomoże im w realizacji jego potencjału
                </p>
              </li>
              <li>
                <p>
                  Poszukują miejsca do budowania networkingu w swojej firmie
                </p>
              </li>
              <li>
                <p>
                  Rozglądają się za ciekawymi projektami, do których chcieliby
                  włożyć swój wkład
                </p>
              </li>
            </ul>
          </div>
          <div>
            <h3>Inicjatywa biznesowa dla tych, którzy</h3>
            <p>
              Gromadzimy się na 17 piętrze w open space prestiżowego wieżowca,
              aby porozmawiać na najbardziej wartościowe przyszłościowe tematy
              obecnych czasów.
            </p>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Description;
