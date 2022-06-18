//Importando Hooks
import { useState, useEffect } from "react";
//Importando de firestore
import { getApplicants, getAnnouncements } from "../../service/firestore";
// Importando ApexCharts
import Chart from "react-apexcharts";
// Importando Lodash
import _, { sortBy } from "lodash";
// Importando estilos
import "./../../styles/component/barChart.scss";
import { getCalificacionDash } from "../../service/calificacionServices";

const BarChart = (props) => {
  // Inicializando el chartData para el apexchart
  const [chartData, setChartData] = useState(null);

  const fetchDash = async () => {
    const data = await getCalificacionDash(110);
    return data.content;
  };

  const buildChart = async () => {
    const dataDash = await fetchDash();
    
    const convocPostulante = await dataDash.map((data)=>data.convocatoria_postulantes)
    const convocNombre = await dataDash.map((data)=>data.convocatoria_nombre)
    // console.log("dataDash.convocatoria_postulantes,",convocPostulante);
    // console.log("dataDash.convocatoria_nombre,",convocNombre);

    // Declarando la data para el apexChart
    const data = {
      series: [
        {
          name: "N° de postulaciones",
          data: convocPostulante,
        },
      ],
      options: {
        xaxis: {
          tickPlacement: "on",
          categories: convocNombre,
          labels: {
            style: {
              colors: "#fff",
              fontSize: "14",
            },
          },
        },
        yaxis: {
          labels: {
            style: {
              colors: ["#fff"],
              fontSize: "14",
            },
          },
          min: 0,
        },
        colors: ["#ffffff90"], //para el color de la linea de la gráfica lineal
        dataLabels: {
          enabled: false, // para activar la data encima de los markers
        },
        stroke: {
          curve: "straight",
          width: 5, //para el grosor de la linea de la gráfica lineal
        },
        markers: {
          size: 3, // son los circulos en la gráfica
        },
        fill: {
          colors: ["#fff"], //para el color del sombreado debajo de la gráfica lineal
        },
        grid: {
          borderColor: "#e7e7e7",
          row: {
            colors: ["transparent"],
          },
          column: {
            colors: ["transparent"],
          },
        },
      },
    };
    setChartData(data);
  };

  useEffect(() => {
    buildChart();
  }, []);

  return (
    <div className="barChart">
      <div
        className="barChart__graphic"
        style={{
          background: `linear-gradient(195deg, ${props.color1}, ${props.color2})`,
        }}
      >
        {chartData && (
          <Chart
            options={chartData.options}
            series={chartData.series}
            type="bar"
            height={300}
          />
        )}
      </div>
      <div className="barChart__content">
        <h3>Postulantes por convocatoria</h3>
        <p>N° de postulaciones por convocatoria</p>
      </div>
    </div>
  );
};

export default BarChart;
