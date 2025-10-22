import { MAX_CONTENT_WIDTH } from "../../utils/globalStyle";
import Link from "next/link";
import Image from "next/image";
import GLDefaultLogo from "../../../../../public/images/logo_default.png";

export default function Header() {
  return (
    <section
      data-testid="header-container"
      className="top-0 py-2 px-4 xl:px-0 flex justify-center w-full "
    >
      <div
        data-testid="header-inner-container"
        className={`w-full ${MAX_CONTENT_WIDTH} flex justify-between items-center`}
      >
        <Link href={"/"}>
          <div className="relative h-[80px] w-[140px]">
            <Image
              src={GLDefaultLogo}
              alt="group icon"
              fill
              className="objetc-contain"
            />
          </div>
        </Link>
      </div>
    </section>
  );
}
