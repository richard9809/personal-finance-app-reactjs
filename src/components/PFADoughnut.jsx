import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);

const PFADoughnut = ({ data, options }) => {
  return (
    <div className="container">
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default PFADoughnut;
