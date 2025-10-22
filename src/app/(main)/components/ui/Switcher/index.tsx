"use client";
import { useState } from "react";

export default function Switcher() {
  const [isSwitcherLeft, setIsSwitcherRight] = useState<boolean>(false);

  const handleClick = () => {
    setIsSwitcherRight(!isSwitcherLeft);
  };

  return (
    <button data-testid="switcher-container" onClick={handleClick}>
      <div
        className={`px-1 relative h-[20px] w-[46px] bg-dim-gray rounded-2xl flex items-center
         transition-all duration-200`}
      >
        <span
          className={`h-[12px] w-[12px] bg-golden-yellow rounded-full transform transition-transform duration-300 ${
            isSwitcherLeft ? "translate-x-6" : "translate-x-0"
          }`}
          data-testid="switcher-ball"
        ></span>
      </div>
    </button>
  );
}
