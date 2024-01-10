"use client"
// ApiContext.tsx
import { createContext, useContext, ReactNode, useState } from 'react';

type Context = {
    children: ReactNode;
}

const AppContext = createContext<any>(undefined);

export function AppWrapper({ children }: {
    children: ReactNode;
}) {
    let [Amount, setAmount] = useState(0);

    return (
        <AppContext.Provider value={
            { Amount, setAmount }
        }>
            {children}
        </AppContext.Provider>
    )
}

export function useAppContext() {
    return useContext(AppContext)
}