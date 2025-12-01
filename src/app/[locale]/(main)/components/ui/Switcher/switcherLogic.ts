export function getNextLocale(current: string) {
  return current === "pt" ? "en" : "pt";
}

export function getPathWithoutLocale(pathname: string) {
  const [, , ...rest] = pathname.split("/");
  return rest.join("/");
}

export function computeBallPosition(locale: string) {
  return locale === "pt" ? "translate-x-5" : "translate-x-0";
}
