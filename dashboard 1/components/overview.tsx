"use client"

import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  {
    name: "Jan",
    Azure: 65,
    AWS: 48,
  },
  {
    name: "Feb",
    Azure: 59,
    AWS: 38,
  },
  {
    name: "Mar",
    Azure: 80,
    AWS: 43,
  },
  {
    name: "Apr",
    Azure: 81,
    AWS: 55,
  },
  {
    name: "May",
    Azure: 56,
    AWS: 36,
  },
  {
    name: "Jun",
    Azure: 55,
    AWS: 27,
  },
  {
    name: "Jul",
    Azure: 40,
    AWS: 32,
  },
]

export function Overview() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value}%`}
        />
        <Tooltip />
        <Legend />
        <Bar dataKey="Azure" fill="#3b82f6" radius={[4, 4, 0, 0]} />
        <Bar dataKey="AWS" fill="#f97316" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}
