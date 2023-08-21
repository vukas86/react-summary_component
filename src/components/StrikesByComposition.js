import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart } from "chart.js/auto";
import { useMeteorDataContext } from "../store/meteor-context";

function StrikesByComposition() {
  const meteorData = useMeteorDataContext();

  if (meteorData === 0) return;

  const strikesByRecclass = {};

  meteorData.forEach((meteor) => {
    const compostion = meteor.recclass;

    if (compostion !== undefined) {
      if (!strikesByRecclass[compostion]) {
        strikesByRecclass[compostion] = 0;
      }
      strikesByRecclass[compostion]++;
    }
  });

  const compositions = Object.keys(strikesByRecclass);
  const strikesCount = compositions.map(
    (composition) => strikesByRecclass[composition]
  );
  const chartData = {
    labels: compositions,
    datasets: [
      {
        label: "Number of Strikes by Meteroite Composition",
        data: strikesCount,
        borderColor: "rgb(75, 192, 192)",
        fill: false,
      },
    ],
  };

  const chartOptions = {
    scales: {
      x: {
        ticks: {
          color: "white",
        },
      },
      y: {
        ticks: {
          color: "white",
        },
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        labels: {
          color: "wheat",
          font: {
            size: 16,
          },
        },
      },
    },
  };

  return (
    <div
      style={{
        width: 700,
        color: "white",
        marginTop: 50,
        background: "rgb(12, 22, 79)",
        border: "5px solid white",
        borderRadius: "3px",
      }}
    >
      <Line data={chartData} options={chartOptions} />
    </div>
  );
}

export default StrikesByComposition;
