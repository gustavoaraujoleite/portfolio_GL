'use client'
import { useTranslations } from "next-intl";
import NavButton from "../ui/NavButton";

type Props = {
  isHorizontal: boolean;
  onButtonClick?: () => void;
};
export default function MenuNav({ isHorizontal, onButtonClick }: Props) {
  const t = useTranslations();

  function hrefFormatter(route: string) {
    const currentLanguage = t("language");
    return `/${currentLanguage}/${route}`;
  }
  return (
    <section
      data-testid="menu-nav-container"
      className={`flex ${
        isHorizontal
          ? "flex-row items-center gap-6 md:gap-4"
          : "flex-col justify-center text-center gap-6"
      }  `}
      onClickCapture={() => {
        if (onButtonClick) {
          onButtonClick();
        }
        return;
      }}
    >
      <NavButton href={hrefFormatter("home")} title={t("nav-home")} />
      <NavButton href={hrefFormatter("about")} title={t("nav-about")} />
      <NavButton href={hrefFormatter("experience")} title={t("nav-experience")} />
      <NavButton href={hrefFormatter("contact")} title={t("nav-contact")} />
    </section>
  );
}
