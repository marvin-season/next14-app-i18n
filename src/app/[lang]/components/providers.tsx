"use client";

import { createContext, useContext } from "react";

export const I18nContext = createContext<any>(null);

export const useI18nContext = () => {
    return useContext(I18nContext);
}

export default function Providers({ children, dictionary }: { children: React.ReactNode, dictionary: any }) {
    console.log('providers', dictionary);
    return <>
        <I18nContext.Provider value={dictionary}>
            {children}
        </I18nContext.Provider>
    </>;
}
