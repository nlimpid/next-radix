'use client';
import {XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries} from 'react-vis';
import Draggable from 'react-draggable';
import WeatherApp from "@/app/weather/page";

export default function B() {
	return (
		<div>
			<Draggable bounds={{left: 0, top: 0, right: 100, bottom: 200}}>
				<div className="w-40 h-20 border-amber-200 border-spacing-1">I can now be moved around!</div>

			</Draggable>
			<div className="w-40 h-20 border-amber-200 border-spacing-1">I can now be moved around!2</div>
			{/*<XYPlot*/}
			{/*	width={300}*/}
			{/*	height={300}>*/}
			{/*	<HorizontalGridLines/>*/}
			{/*	<LineSeries*/}
			{/*		data={[*/}
			{/*			{x: 1, y: 10},*/}
			{/*			{x: 2, y: 5},*/}
			{/*			{x: 3, y: 15}*/}
			{/*		]}/>*/}
			{/*	<XAxis/>*/}
			{/*	<YAxis/>*/}
			{/*</XYPlot>*/}
		</div>
	)
}

