//Importando Hooks
import { useState, useEffect } from "react";
//Importando de firestore
import { getAnnouncements, getQualifications } from "../../service/firestore";
// Importando ApexCharts
import Chart from "react-apexcharts";
// Importando Lodash
import _, { sortBy } from "lodash";
// Importando estilos
import "./../../styles/component/barChart.scss";

const BarChart2 = (props) => {
  // Inicializando el chartData para el apexchart
  const [chartData, setChartData] = useState(null);

  // Obteniendo la base de datos tblConvocatoria
  const fetchAnnouncements = async () => {
    const data = await getAnnouncements();
    return data;
  };

  // Obteniendo la base de datos tblCalificacion
  const fetchQualifications = async () => {
    const data = await getQualifications();
    return data;
  };

  const buildChart = async () => {
    const announcements = await fetchAnnouncements();
    const qualifications = await fetchQualifications();
    
    // Agrupando la data de calificaciones por id_convocatoria
    const groupedResult = _.chain(qualifications)
      .groupBy((item) => {
        return item.id_convocatoria;
      })
      .map((value, key) => ({ key, items: value }))
      .value();

    // Obteniendo el nombre de la convocatoria por el id_convocatoria
    const names = sortBy(announcements, "id_convocatoria").map(
      (item) => item.nombre_convocatoria
    );

    // const names2 = groupedResult.map((announc) => announc.key); 
    // Obteniendo la cantidad de postulantes aceptados por la sumatoria de calificaciones
    const counts = groupedResult.map(
      (applicant) => applicant.items.filter((qualification) => (qualification.calif_academica + qualification.calif_laboral + qualification.calif_psicologica) > 140 ).length
    );

    // Declarando la data para el apexChart
    const data = {
      series: [
        {
          name: "N° de postulantes aceptados",
          data: counts,
        },
      ],
      options: {
        xaxis: {
          tickPlacement: "on",
          categories: names,
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
        // theme:{
        //   mode:'dark',
        // },
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
      <div className="barChart__graphic" style={{background: `linear-gradient(195deg, ${props.color1}, ${props.color2})`}} >
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
        <h3>Postulantes aceptados por convocatoria</h3>
        <p>N° de postulaciones aceptados por convocatoria</p>
      </div>
    </div>
  );
};

export default BarChart2;
