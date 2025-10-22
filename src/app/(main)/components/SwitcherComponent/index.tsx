import Image from "next/image";
import Switcher from "../ui/Switcher";
import BRFlag from "../../../../../public/icons/BR_flag.svg";
import UKFlag from "../../../../../public/icons/UK_flag.svg";

export default function SwitcherComponent() {
  return (
    <section
      data-testid="switcher-main-container"
      className="flex gap-2 font-nunito text-gray-50 text-sm"
    >
      <div
        data-testid="switcher-flag-container"
        className="flex gap-1 items-center "
      >
        <span>PT</span>
        <div className="relative w-[16px] h-[14.5px]">
          <Image
            src={BRFlag}
            fill
            className="object-cover"
            alt="Brazilian flag"
            data-testid="switcher-brazilian-flag"
          />
        </div>
      </div>
      <div>
        <Switcher />
      </div>
      <div className="flex gap-1 items-center">
        <span>EN</span>
        <div className="relative w-[16px] h-[14.5px]">
          <Image
            src={UKFlag}
            fill
            className="object-cover"
            alt="UK flag"
            data-testid="switcher-uk-flag"
          />
        </div>
      </div>
    </section>
  );
}
