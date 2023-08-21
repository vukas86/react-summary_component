import React from "react";
import { useMeteorDataContext } from "../store/meteor-context";
import styles from "./StrikesAndMass.module.css";

function AverageMass({ onAvrgMass }) {
  const meteorData = useMeteorDataContext();

  if (meteorData === 0) {
    return;
  }

  let totalMass = 0;
  let totalCount = 0;

  meteorData.forEach((meteor) => {
    const massValue = meteor.mass;
    const mass = massValue ? parseFloat(massValue.split(",").join("")) : 0;

    totalMass += mass;
    totalCount++;
  });

  const overallAvgMass = (totalMass / totalCount).toFixed(2);

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <h2 className={styles.title}>Total Meteor Strikes:</h2>
        <p>{meteorData.length}</p>
      </div>
      <div className={styles.box}>
        <h2 className={styles.title}>Average Meteor Mass:</h2>
        <p>{overallAvgMass} tons</p>
      </div>
    </div>
  );
}

export default AverageMass;
