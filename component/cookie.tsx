import { atom, useAtom } from "jotai";
import { atomWithStorage, createJSONStorage } from 'jotai/utils'

import Cookies from 'js-cookie';

const cookieStorage = createJSONStorage<string>(() => {
    return {
        getItem: () => Cookies.get('contextRail') as string,
        setItem: (ctx, value) => Cookies.set(ctx, value),
        removeItem: (ctx) => Cookies.remove(ctx),
    }
})

export const contextRailAtom = atomWithStorage<string>('contextRail', '', cookieStorage)

const storage = createJSONStorage(() => sessionStorage)
const someAtom = atomWithStorage('data', 'bbb', storage)