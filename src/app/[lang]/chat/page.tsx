"use client";

import { useI18nContext } from "../components/providers";

export default function ChatPage({ params }: { params: any }) {
    const dictionary = useI18nContext();
    console.log('chat', dictionary, params);
    return <div>{dictionary.chat.title}</div>;
}
