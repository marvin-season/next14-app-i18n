import { getTranslations } from "next-intl/server";
import { NextResponse } from "next/server";

import { NextRequest } from "next/server";

export const GET = async (request: NextRequest) => {
  const t = await getTranslations('ChatPage');
  return NextResponse.json({ message: t('title') });
};
