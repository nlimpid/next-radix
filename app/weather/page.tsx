'use client'
import {
  Dispatch,
  SetStateAction,
  useCallback,
  useMemo,
  useEffect,
  useState,
} from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";



const WeatherApp = () => {
  console.log('invoke function component');
  const [temperature, settemperature] = useState(23);

  const handleClick = () => {
    fetch("api/caiyun").
      then((response) => response.json())
      .then((data) => {
        console.log(data.data);
        settemperature(data.data.result.realtime.temperature)
      })
      ;
  }

  // useState ...

  // STEP 2：使用 useEffect Hook
  useEffect(() => {
    console.log('execute function in useEffect');
  });

  // handleClick ...

  return (
    <div className="flex items-center justify-center h-screen">
      <button onClick={handleClick}>just a button </button>
      {console.log('render')}
      <div className="h-80 w-60 bg-slate-300">
        <div className="flex flex-col justify-center items-center w-72 h-48 bg-gray-200 rounded-lg shadow-md">
          <div className="flex justify-center items-center h-1/4">
            Header. Hangzhou
          </div>
          <div className="flex justify-center items-center h-2/4">
            temperature is {temperature}
          </div>
          <div className="flex justify-center items-center h-1/4">
            { }
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;