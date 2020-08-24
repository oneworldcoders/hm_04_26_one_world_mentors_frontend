import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";

const Chart = () => {
  const [chartData, setChartData] = useState({});

  const chart = () => {
    setChartData({
      labels: ["JavaScript", "Ruby", "React", "Python", "Golang"],
      datasets: [
        {
          label: "Rating",
          data: [50, 60, 30, 70, 80],
          backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", '#444', '#43d8c9'],
          hoverBackgroundColor: [
            '#444', 
            '#fff',
            '#FF6384',
            '#36A2EB',
            '#fdd998'
            ],
          borderWidth: 4,
        },
      ],
    });
  };

  useEffect(() => {
    chart();
  }, []);

  return (
    <div>
      
      <div style={{ width: "650px" }}>
        <Pie
          data={chartData}
          option={{
            responsive: true,
            title: { text: "Mentor Ratings", display: true },
          }}
        />
        <div style={{marginTop:'1rem', fontWeight: 'bold'}}>Mentors Rating</div>
      </div>
    </div>
  );
};
export default Chart;
