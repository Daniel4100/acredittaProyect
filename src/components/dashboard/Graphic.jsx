import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
// importe una liroeria para graficar
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// obciones de configuracion del grafico
export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "top 10",
    },
  },
};

const Graphic = ({ array }) => {
  // hice un pivote o const de ayuda para ordenar los datos
  const pivot =
    array != [] &&
    array.sort(
      (a, b) =>
        a.close_approach_data[0].miss_distance.kilometers -
        b.close_approach_data[0].miss_distance.kilometers
    );

    // datos ordenados de menor a mayor por el nombre y solo top 10 objetos mas cercanos a la tierra
  const labels = array.map((e) => e.name).splice(0, 10);

  const data = {
    labels,
    datasets: [
      {
        label: "Near Earth Objects",
        data: array
        //ordenar los datos en kilometros para que conrespondan con los labels
          .map((e) => e.close_approach_data[0].miss_distance.kilometers)
          .splice(0, 10),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  // retornar el grafico
  return <Line data={data} options={options} />;
};

export default Graphic;
