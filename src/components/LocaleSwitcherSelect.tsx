'use client';

import { useTransition } from 'react';
import { Locale } from '@/i18n/config';
import { setUserLocale } from '@/service/locale';

type Props = {
  defaultValue: string;
};

export default function LocaleSwitcherSelect({
  defaultValue,
}: Props) {
  const [isPending, startTransition] = useTransition();

  function onChange(value: string) {
    const locale = value as Locale;
    startTransition(() => {
      setUserLocale(locale);
    });
  }

  return (
    <div className="relative">
      <select defaultValue={defaultValue} onChange={(e) => onChange(e.target.value)}>
        <option value="en">English</option>
        <option value="zh">Chinese</option>
      </select>
    </div>
  );
}