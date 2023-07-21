import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { DayOverviewData } from "../api/DayOverviewApi";
import "../styles/components/linechart.scss"

interface LineChartProps {
  data: DayOverviewData[];
}

const LineChart: React.FC<LineChartProps> = ({ data }) => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstanceRef = useRef<Chart | null>(null);

  useEffect(() => {
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    const ctx = chartRef.current?.getContext("2d");

    if (ctx) {
      const chartData = {
        labels: data.map((item: DayOverviewData) => `${item.hour}:00`),
        datasets: [
          {
            label: "Average Speed",
            backgroundColor: "rgb(255, 99, 132)",
            borderColor: "rgb(255, 99, 132)",
            data: data.map((item: DayOverviewData) => item.averageSpeed),
          },
        ],
      };

      chartInstanceRef.current = new Chart(ctx, {
        type: "line",
        data: chartData,
        options: {
          maintainAspectRatio: false,
          responsive: true,
          scales: {
            y: {
              beginAtZero: false,
            },
          },
          plugins: {
            legend: {
              position: "top",
            },
          },
        },
      });
    }
  }, [data]);

  return (
    <div className="linechart">
      <canvas ref={chartRef} style={{ maxWidth: "600px", maxHeight: "400px" }} />
    </div>
  );
};

export default LineChart;