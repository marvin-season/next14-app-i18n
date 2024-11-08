"use client";

import { createContext } from "react";

const I18nContext = createContext<any>(null);

export default function Providers({ children, dictionary }: { children: React.ReactNode, dictionary: any }) {
    return <>
        <I18nContext.Provider value={dictionary}>
            {children}
        </I18nContext.Provider>
    </>;
}
