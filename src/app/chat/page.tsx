'use client';

import { request } from "@/service/request";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

export default function ChatPage() {
  const t = useTranslations("ChatPage");
  const [message, setMessage] = useState("");

  useEffect(() => {
    request("/api/chat")
      .then((data) => setMessage(data.message));
  }, [t]);

  return (
    <>
      <h1>{t("title")}</h1>
      <p>{message}</p>
    </>
  );
}
