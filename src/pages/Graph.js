import React, { useEffect, useState, useMemo } from 'react'
import { useParams } from 'react-router-dom'

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler,
  } from "chart.js";
  import { Bar } from "react-chartjs-2";
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler
  );
  
  const options = {
    fill: true,
    animations: true,
    scales: {
      y: {
        min: 0,
      },
      x:{
        min:0,
      }
    },
    responsive: true,
    plugins: {
      legend: {
        display: true,
      },
    },
  };
export default function Graph(props) {
    const {id} = useParams();
    const [graph,setGraph] = useState({});
    const [categories,setCategories]= useState([]);
    const [visitas,setVisitas]= useState([]);

    const data = useMemo(function () {
        return {
          datasets: [
            {
              label: "Visitas de pagina",
              tension: 0.5,
              data: visitas,
              borderColor: "rgb(75, 192, 192)",
              backgroundColor: ['blue','yellow','green','red','cyan','darkviolet'],
            },
          ],
          labels:categories,
        };
      }, [categories,visitas]);
    useEffect(()=>{
        fetch(`http://localhost:3001/api/histories/${id}`)
            .then(response => response.json())
            .then(res =>{
                let {data} = res;
                let cat = [...data.categories];
                let nombres= [];
                let vis=[];
                let suma=0;
                cat.forEach(categoria=>{
                    suma +=categoria.visitas;
                })
                cat.forEach(categoria=>{
                    let porcentaje = (categoria.visitas/suma)*100; 
                    porcentaje = Number((Math.abs(porcentaje) * 100).toPrecision(15));
                    porcentaje =Math.round(porcentaje) / 100 * Math.sign(porcentaje);
                    nombres.push(categoria.name + ' '+ porcentaje + '%');
                    vis.push(categoria.visitas);
                })
               
                setVisitas(vis)
                setCategories(nombres);
                setGraph(data);
            
            });
    },[]);
  return (
    <div>
        <div className={'mt-5 mb-5 px-20 bg-gray-100'}>
        <Bar data={data} options={options} />
        </div>
    </div>
  )
}


  // alta precision https://www.delftstack.com/es/howto/javascript/javascript-round-to-2-decimal-places/
// graficos https://www.youtube.com/watch?v=TQGg_VZ6FgY