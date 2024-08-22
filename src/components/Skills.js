import React, { useEffect, useRef } from 'react';
import { Chart, RadarController, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';
import colorSharp from "../assets/img/color-sharp.png";

// Register the radar chart components
Chart.register(RadarController, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

export const Skills = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    const data = {
      labels: [
        'Python',
        'C/C++',
        'Java',
        'Databases',
        'Data Analysis',
        'ML Frameworks',
        'DevOps Tools',
        'Git',
        'Soft Skills'
      ],
      datasets: [{
        label: 'Skill Proficiency',
        data: [100, 90, 75, 85, 90, 85, 80, 85, 90], // All skills set to 100
        fill: true,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgb(54, 162, 235)',
        pointBackgroundColor: 'rgb(54, 162, 235)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(54, 162, 235)'
      }]
    };

    const config = {
      type: 'radar',
      data: data,
      options: {
        elements: {
          line: {
            borderWidth: 2 // Reduced border width to make lines thinner
          }
        },
        scales: {
          r: {
            angleLines: {
              display: true
            },
            suggestedMin: 0,
            suggestedMax: 100,
            ticks: {
              display: false // Hide the numbers 20, 40, 60, etc.
            },
            grid: {
              color: '#ccc', // Lighter grid lines for better aesthetics
            },
            pointLabels: {
              fontSize: 14, // Adjust font size of labels if needed
              color: '#fff' // Label color
            }
          }
        },
        plugins: {
          legend: {
            display: false // Optionally hide the legend
          }
        }
      }
    };

    const myChart = new Chart(ctx, config);

    return () => {
      myChart.destroy();
    };
  }, []);

  return (
    <section className="skill" id="skills">
        <div className="container">
          <div className="skill-content">
            <h2>Skills</h2>
            <p>Acquired skills through academic and professional training include: <br /></p>
            <canvas ref={chartRef} width="300" height="300"></canvas> {/* Keep chart size small */}
          </div>
        </div>
      <img className="background-image-left" src={colorSharp} alt="Background"/>
    </section>
  );
}
