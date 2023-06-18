'use client'

import { useRouter } from "next/router";
import { useSearchParams } from 'next/navigation';
import { atomWithStorage, createJSONStorage } from 'jotai/utils'
import { atom, useAtom } from "jotai";
import { contextRailAtom } from "../../component/cookie"



const Feishu = () => {
    const searchParams = useSearchParams();

    const [bb, setBB] = useAtom(contextRailAtom)


    console.log("params is ?", searchParams.get('code'));
    setBB(searchParams.get('code') as string)


    return (
        <div>feishu {searchParams}</div>
    )
}

export default Feishu;