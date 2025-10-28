"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavButtonProps = {
  href: string;
  title: string;
  pathProp?: string;
};

export default function NavButton({ href, title, pathProp }: NavButtonProps) {
  const path = pathProp || usePathname();

  const isActive = path === href;

  return (
    <div data-testid="nav-button-container">
      <Link
        href={href}
        data-testid="nav-button-anchor"
        className={`relative inline-block text-xl font-mono tracking-wider py-1 px-3  transition-all duration-200 ease-out  hover:text-golden-yellow  after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-0 after:h-[2px] after:bg-golden-yellow after:transition-all after:duration-200 after:ease-out after:-translate-x-1/2 hover:after:w-full ${
          isActive
            ? "text-golden-yellow after:w-full"
            : "text-gray-50 after:w-0 hover:after:w-full"
        }`}
      >
        {title}
      </Link>
    </div>
  );
}
