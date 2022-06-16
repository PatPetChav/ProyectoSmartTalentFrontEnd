// Importando componentes
import CardsDashboard from "./../../components/CardsDashboard";
import BarChart from "./../../components/charts/BarChart" 
import BarChart2 from "./../../components/charts/BarChart2" 
// Importando estilos
import "./../../styles/page/dashboard.scss";

const Dashboard = () => {

  return (
      <div className='dashboard'>
        <CardsDashboard />

        <div className='dashboard__charts'>
          <BarChart color1={'rgb(255, 167, 38)'} color2={'rgb(251, 140, 0)'} />
          <BarChart2 color1={'rgb(102, 187, 106)'} color2={'rgb(67, 160, 71)'} />
        </div>
      </div>
  );
};

export default Dashboard;
