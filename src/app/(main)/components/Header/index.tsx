"use client";
import { MAX_CONTENT_WIDTH } from "../../utils/globalStyle";
import Link from "next/link";
import Image from "next/image";
import GLDefaultLogo from "../../../../../public/images/logo_default.png";
import SwitcherComponent from "../SwitcherComponent";

export default function Header() {
  
  return (
    <section
      data-testid="header-container"
      className="top-0 py-2 flex px-4 justify-center w-full "
    >
      <div
        data-testid="header-inner-container"
        className={`w-full ${MAX_CONTENT_WIDTH} flex justify-between items-center flex-nowrap`}
      >
        <Link href={"/"}>
          <div className="relative h-[80px] w-[140px] lg:w-[210px] lg:h-[130px]">
            <Image
              src={GLDefaultLogo}
              alt="group icon"
              fill
              className="objetc-contain"
            />
          </div>
        </Link>
       
        {/* <SwitcherComponent /> */}
      </div>
    </section>
  );
}
