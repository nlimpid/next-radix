'use client'
import { contextRailAtom } from "@/component/cookie";
import { Button } from "@modulz/design-system";
import { atom, useAtom, useAtomValue, useSetAtom } from "jotai";
import { Suspense } from "react";

const idAtom = atom(1);

const userAtom = atom(async (get) => {
    console.log("userAtom")
    const id = get(idAtom);
    return fetch("https://jsonplaceholder.typicode.com/users/" + id).then((res) =>
        res.json()
    );
});


const User = () => {
    const user = useAtomValue(userAtom);
    return <div>{JSON.stringify(user)}</div>;
};

export default function App() {
    const [bb, setBB] = useAtom(contextRailAtom)

    const set = useSetAtom(idAtom);
    return (
        <div className="App">
            <Button
                onClick={() => {
                    set((id) => id + 1);
                }}
            >
                PLUS one
            </Button>

            <Suspense fallback="Loading...">
                <User />
            </Suspense>
            <div>{bb}</div>
        </div>
    );
}