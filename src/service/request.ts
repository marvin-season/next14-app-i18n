import { getUserLocale } from "./locale";

export const request = async (url: string, options: RequestInit = {}) => {
  const response = await fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      "Accept-Language": await getUserLocale(),
    },
  });
  return response.json();
};
