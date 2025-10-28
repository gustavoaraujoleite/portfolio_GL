"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import MobileMenuContent from "../../MobileMenuContent";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/app/(main)/components/ui/Drawer";
export default function BurgerMenu() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="flex flex-col items-end">
      <Drawer open={open} onOpenChange={(isOpen) => setOpen(isOpen)}>
        <DrawerTrigger onClick={() => setOpen(!open)}>
          <div
            data-testid="burger-menu-container"
            className="flex items-center gap-3 px-4 py-2 text-lg font-semibold uppercase transition-all duration-300 hover:opacity-70"
          >
            <div className="relative w-6 h-[18px]">
              <motion.span
                data-testid="burger-span"
                className="absolute top-0 left-0 w-full h-[2px] bg-gray-50 rounded-full"
                animate={open ? { rotate: 48, y: 8 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
              <motion.span
                data-testid="burger-span"
                className="absolute top-[8px] left-0 w-full h-[2px] bg-gray-50 rounded-full"
                animate={open ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
              <motion.span
                data-testid="burger-span"
                className="absolute bottom-0 left-0 w-full h-[2px] bg-gray-50 rounded-full"
                animate={open ? { rotate: -48, y: -8 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
            </div>
          </div>
        </DrawerTrigger>
        <DrawerContent
          data-testid="burger-menu-content"
          className="bg-regular-gray border-regular-gray shadow-[0px_-2px_6px_-1px_rgba(255,255,255,0.5)]"
        >
          <DrawerHeader>
            <DrawerTitle></DrawerTitle>
            <MobileMenuContent onButtonClick={() => setOpen(false)} />
          </DrawerHeader>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
