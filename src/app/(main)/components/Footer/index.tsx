import Image from "next/image";
import GLDefaultLogo from "../../../../../public/images/logo_default.png";
import SocialMediaIcon from "../ui/SocialMediaIcon";

import InstagramIcon from "../../../../../public/icons/Instagram.svg";
import GithubIcon from "../../../../../public/icons/Github.svg";
import LinkedinIcon from "../../../../../public/icons/Linkedin.svg";
import Link from "next/link";

type Props = {
  backgroundColor?: `bg-${string}`;
};
export default function Footer({ backgroundColor }: Props) {
  return (
    <section
      data-testid="footer-container"
      className={`flex justify-center fixed bottom-0 w-full py-2 px-4 xl:px-0 ${backgroundColor}`}
    >
      <div
        data-testid="footer-inner-container"
        className="w-full max-w-[1078px] flex justify-between items-center"
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

        <div
          data-testid="footer-icon-container"
          className="flex gap-4 lg:gap-8"
        >
          <SocialMediaIcon
            imageSrc={LinkedinIcon}
            href="https://www.linkedin.com/in/gustavoaraujoleite/"
          />
          <SocialMediaIcon
            imageSrc={GithubIcon}
            href="https://github.com/gustavoaraujoleite"
          />
          <SocialMediaIcon
            imageSrc={InstagramIcon}
            href="https://www.instagram.com/gustavoaraujoleite/"
          />
        </div>
      </div>
    </section>
  );
}
