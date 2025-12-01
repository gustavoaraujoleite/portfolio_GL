import { NextIntlClientProvider } from "next-intl";
import { MockNextRouter } from "./nextRouter";
import React from "react";

export function mountWithIntl(component: React.ReactNode, locale = "pt") {
  const messages = import(`../../src/messages/${locale}.json`);

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <MockNextRouter>{component}</MockNextRouter>
    </NextIntlClientProvider>
  );
}
