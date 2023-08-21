import React from "react";
import StrikesAndMass from "./StrikesAndMass.js";
import StrikesByYear from "./StrikesByYear.js";
import StrikesByComposition from "./StrikesByComposition.js";

function Chart() {
  return (
    <>
      <StrikesAndMass />
      <StrikesByYear />
      <StrikesByComposition />
    </>
  );
}

export default Chart;
