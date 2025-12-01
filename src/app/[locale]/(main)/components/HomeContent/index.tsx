"use client";
import { useTranslations } from "next-intl";
import Link from "next/link";
import AboutImage from "../AboutImage";
import ButtonTemplate from "../ui/Button";

export default function HomeContent() {
  const t = useTranslations();

  return (
    <section
      data-testid="home-main-container"
      className="w-full h-full flex flex-col items-center gap-16"
    >
      <AboutImage />

      <div
        data-testid="home-intro-container"
        className="flex flex-col gap-1.5 font-sains text-center text-2xl md:text-[32px] text-gray-50"
      >
        <p>
          {t("home-welcoming-message")}{" "}
          <span
            data-testid="home-intro-highlight"
            className="text-golden-yellow"
          >
            {" "}
            Gustavo Leite
          </span>{" "}
        </p>
        <p>{t("home-welcoming-job-intro")}</p>
      </div>

      <Link
        href={`/${t("language")}/about`}
        data-testid="home-redirection-button"
      >
        <ButtonTemplate title={`${t("home-action-button")}`} />
      </Link>
    </section>
  );
}
