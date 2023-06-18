'use client';
import { Payment, columns } from "./columns"
import { DataTable } from "./data-table"
import {CartesianGrid, Line, LineChart, XAxis, YAxis} from "recharts";

async function getData(): Promise<Payment[]> {
	// Fetch data from your API here.
	return [
		{
			id: "728ed52f",
			amount: 100,
			status: "pending",
			email: "m@example.com",
		},
		// ...
	]
}

export default async function DemoPage() {
	const data = await getData()

	return (
		<div className="container mx-auto py-10">
			<DataTable columns={columns} data={data} />
			<ChartDemo></ChartDemo>
		</div>
	)
}


function ChartDemo() {
	const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}];
	return (
		<div>
			<LineChart width={500} height={300} data={data}>
				<XAxis dataKey="name"/>
				<YAxis/>
				<CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
				<Line type="monotone" dataKey="uv" stroke="#8884d8" />
				<Line type="monotone" dataKey="pv" stroke="#82ca9d" />
			</LineChart>
		</div>
	)
}