"use client";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import {
  computeBallPosition,
  getNextLocale,
  getPathWithoutLocale,
} from "./switcherLogic";

export default function Switcher() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const ballPosition = computeBallPosition(locale);

  const handleClick = () => {
    const newLocale = getNextLocale(locale);
    const pathWithoutLocale = getPathWithoutLocale(pathname);
    router.replace(`/${newLocale}/${pathWithoutLocale}`);
  };

  return (
    <button data-testid="switcher-container" onClick={handleClick}>
      <div className="px-1 relative h-[18px] w-[40px] bg-dim-gray rounded-2xl flex items-center transition-all duration-200">
        <span
          className={`h-[12px] w-[12px] bg-golden-yellow rounded-full transform transition-transform duration-300 ${ballPosition}`}
          data-testid="switcher-ball"
        />
      </div>
    </button>
  );
}
