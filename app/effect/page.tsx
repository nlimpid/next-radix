'use client'
import { Button } from "@modulz/design-system";
import { atom, useAtomValue, useSetAtom } from "jotai";
import { Suspense, useEffect, useState } from "react";
import useSWR from 'swr'

async function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function hello(e) {
  console.log(e)
}

export default function App() {
  const [id, setId] = useState(1)
  // const [user, setUser] = useState({})
  // const [isLoading, setIsLoading] = useState(true);

  const fetcher = (url) => fetch(url).then((res) => res.json());


  // const fetcher = fetch()
  // .then(res => res.json())
  // .then(data => {
  //     console.log(data)
  //     // setUser(data);
  //     // setIsLoading(false);
  // });

  const { data, error, isLoading } = useSWR("https://jsonplaceholder.typicode.com/users/" + id, fetcher)
  // useEffect(() => {
  //     console.log('effect')
  //     // fetch("https://jsonplaceholder.typicode.com/users/" + id)
  //     //     .then(res => res.json())
  //     //     .then(data => {
  //     //         console.log(data)
  //     //         setUser(data);
  //     //         setIsLoading(false);
  //     //     });


  // }, [id])
  console.log("rendered")

  return (
    <div className="App">
      <Button
        onClick={async (e) => {
          console.log(e);
          await delay(2000);
          console.log('After delay');
        }}
      >
        PLUS two
      </Button>
      <Button
        onClick={(e) => hello(e)}
      >
        PLUS  with ()
      </Button>
      <Button
        onClick={hello}
      >
        PLUS three
      </Button>
      <Button
        onClick={() => {
          console.log(id)
          setId((id) => id + 1);
        }}
      >
        PLUS one
      </Button>

      {/* <Suspense fallback="Loading..."> */}
      {isLoading ? <p>Loading data...</p> : <div>111{JSON.stringify(data)}</div>}

      {/* </Suspense> */}
    </div >
  );
}