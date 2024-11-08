import { useTranslations } from "next-intl";

export default function ChatPage() {
  const t = useTranslations("ChatPage");
  return <h1>{t("title")}</h1>;
}
