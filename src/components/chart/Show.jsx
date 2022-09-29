import { useState } from "react";
import { Line, Bar, Bubble } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

import { UserData } from "./Data";

function GrafikChart({ chartData }) {
  return <Line data={chartData} />;
}
function BarChart({ chartData }) {
  return <Bar data={chartData} />;
}
function BubbleChart({ chartData }) {
  return <Bubble data={chartData} />;
}

function Show() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Data Ruas",
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 1,
      },
    ],
  });

  // IF YOU SEE THIS COMMENT: I HAVE GOOD EYESIGHT

  return (
    <div className="row">
      <div className="col-lg-4">
          <GrafikChart chartData={userData} />
      </div>
      <div className="col-lg-4">
          <BarChart chartData={userData} />
      </div>
      <div className="col-lg-4">
          <BubbleChart chartData={userData} />
      </div>
    </div>
  );
}

export default Show;