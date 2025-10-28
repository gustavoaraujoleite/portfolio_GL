"use client";
import { MAX_CONTENT_WIDTH } from "../../utils/globalStyle";
import Link from "next/link";
import Image from "next/image";
import GLSmallLogo from "../../../../../public/icons/logo_small.svg";
import NavButton from "../ui/NavButton";
import SwitcherComponent from "../SwitcherComponent";

export default function Header() {
  return (
    <section
      data-testid="header-container"
      className="top-0 items-center flex p-4 justify-center w-full"
    >
      <div
        data-testid="header-inner-container"
        className={` w-full ${MAX_CONTENT_WIDTH} flex justify-between items-center flex-nowrap`}
      >
        <div className="flex items-center gap-8 lg:gap-24">
          <Link href={"/"}>
            <div className="relative h-[54px] w-[54px] lg:h-[86px] lg:w-[86px]">
              <Image
                src={GLSmallLogo}
                alt="group icon"
                fill
                className="objetc-contain"
              />
            </div>
          </Link>
          <section
            data-testid="menu-nav-container"
            className="hidden md:flex flex-col gap-6 md:flex-row md:items-center md:gap-4"
          >
            <NavButton href="/home" title="Home" />
            <NavButton href="/about" title="About me" />
            <NavButton href="/experience" title="Experience" />
            <NavButton href="/contact" title="Contact" />
          </section>
        </div>
        <section data-testid="header-nav-container">
          <div className="hidden md:block ">
            <SwitcherComponent />
          </div>
        </section>
      </div>
    </section>
  );
}
