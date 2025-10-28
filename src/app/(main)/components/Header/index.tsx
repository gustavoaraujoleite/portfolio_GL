"use client";
import { MAX_CONTENT_WIDTH } from "../../utils/globalStyle";
import Link from "next/link";
import Image from "next/image";
import GLSmallLogo from "../../../../../public/icons/logo_small.svg";
import SwitcherComponent from "../SwitcherComponent";
import MenuNav from "../MenuNav";
import BurgerMenu from "../ui/BurgerMenu";

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
            <div className="relative h-[76px] w-[76px] lg:h-[86px] lg:w-[86px]">
              <Image
                src={GLSmallLogo}
                alt="group icon"
                fill
                className="objetc-contain"
              />
            </div>
          </Link>
          <section data-testid="menu-nav-container" className="hidden md:block">
            <MenuNav isHorizontal />
          </section>
        </div>
        <section
          data-testid="header-nav-container"
          className="hidden md:block "
        >
          <SwitcherComponent />
        </section>

        <section className="block md:hidden">
          <BurgerMenu />
        </section>
      </div>
    </section>
  );
}
