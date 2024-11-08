import { getDictionary } from "../../../getDictionary";
import { Locale } from "../../../i18n-config";
import Counter from "./components/counter";
import LocaleSwitcher from "./components/LocaleSwitcher";
import Providers from "./components/providers";

export default async function IndexPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);

  return (
    <div>
      <LocaleSwitcher />
      <Providers dictionary={dictionary}>
        <Counter dictionary={dictionary.counter} />
      </Providers>
    </div>
  );
}