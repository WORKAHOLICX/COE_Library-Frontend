import React from "react";
import { ChartContainer, ChartHeader } from "./ChartsStyled";
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'January',
    "Active Users": 0 
  },
  {
    name: 'February',
    "Active Users": 0
  },
  {
    name: 'March',
    "Active Users": 0
  },
  {
    name: 'April',
    "Active Users": 0
  },
  {
    name: 'May',
    "Active Users": 0
  },
  {
    name: 'June',
    "Active Users": 0
  },
  {
    name: 'July',
    "Active Users": 0
  },
  {
    name: 'August',
    "Active Users": 0
  },
  {
    name: 'September',
    "Active Users": 10
  },
  {
    name: 'October',
    "Active Users": 8
  },
  {
    name: 'November',
    "Active Users": 2
  },
  {
    name: 'December',
    "Active Users": 0
  },
];

function Chart(){


    return(
        <>
        <ChartContainer>
            <ChartHeader>Users Analytics</ChartHeader>
       <ResponsiveContainer width="90%" aspect={4/1}>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" horizontal="true" vertical=""/>
          <XAxis dataKey="name" stroke="#FF652F" />
          
          <Tooltip  wrapperStyle={{ outline: "none" }} />
          
          <Line type="monotone" dataKey="Active Users" stroke="#FF652F" strokeWidth="5" activeDot={{ r: 8 }} />
         
        </LineChart>
      </ResponsiveContainer>
      </ChartContainer>
        </>
    )
}

export default Chart;