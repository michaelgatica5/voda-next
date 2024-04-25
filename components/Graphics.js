"use client"
import React from "react";
import Chart from 'chart.js/auto'
import { Bar, Line, Doughnut } from 'react-chartjs-2';
import {Card, CardHeader, CardBody, CardFooter, VisuallyHidden} from "@nextui-org/react";

const Graphics = () => {
    const data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June'],
      datasets: [
        {
            label: 'Sales',
            backgroundColor: 'rgba(64,183,247,1)',
            // backgroundColor: [
            //   'rgb(255, 99, 132)',
            //   'rgb(54, 162, 235)',
            //   'rgb(255, 205, 86)'
            // ],
            tension: 0.4,
            // fill: true,
            // borderColor: 'none',
            // borderWidth: 2,
            data: [12, 39, 20, 10, 25, 18],
            
        },
      ],
    };
  
    const dataArea = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June'],
      datasets: [
        {
            label: 'Sales',
            // backgroundColor: 'rgba(64,183,247,1)',
            backgroundColor: [
              '#1f80ef',
              '#213963',
              '#556682',
              '#008bd1',
              '#40b7f7',
              '#e5e5e5'
            ],
            tension: 0.4,
            fill: true,
            // borderColor: 'none',
            // borderWidth: 2,
            data: [12, 39, 20, 10, 25, 18],
        },
      ],
    };

    const options = {
      title: {
        display: true,
        text: 'Sales Report',
        fontSize: 20,
      },
      legend: {
        display: true,
        position: 'bottom',
      },
      maintainAspectRatio: false,
        // width: 500, 
        // height: 500,
      
    };
  
    return ( 
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 m-5">
        <div className="">
          {/* <Button>Press me</Button> */}
          <Card className="">
            <CardHeader className="bg-primary-blue text-white">
              Presupuestos
            </CardHeader>
            <CardBody>
                    <Bar data={dataArea} options={options} />
            </CardBody>
          </Card>
        </div>
        <div className="">
          {/* <Button>Press me</Button> */}
          <Card className="">
            <CardHeader className="bg-primary-blue text-white">
            Estadísticas Instalaciones
            </CardHeader>
            <CardBody>
                    <Line data={data} options={options} />
            </CardBody>
          </Card>
        </div>
        <div className="">
          {/* <Button>Press me</Button> */}
          <Card className="">
            <CardHeader className="bg-primary-blue text-white">
            Area Chart
            </CardHeader>
            <CardBody>
                    <Line data={dataArea} options={options} />
            </CardBody>
          </Card>
        </div>
        <div className="">
          {/* <Button>Press me</Button> */}
          <Card className="">
            <CardHeader className="bg-primary-blue text-white">
            Pie Chart
            </CardHeader>
            <CardBody>
                    <Doughnut data={dataArea} options={options} />
            </CardBody>
          </Card>
        </div>
		  </div>
    )
  };
  
  export default Graphics;