import { MAX_CONTENT_WIDTH } from "../../utils/globalStyle";

import SocialMediaIcon from "../ui/SocialMediaIcon";
import InstagramIcon from "../../../../../public/icons/Instagram.svg";
import GithubIcon from "../../../../../public/icons/Github.svg";
import LinkedinIcon from "../../../../../public/icons/Linkedin.svg";

export default function Footer() {
  return (
    <section
      data-testid="footer-container"
      className={`flex justify-center w-full pt-8 pb-2 px-4`}
    >
      <div
        data-testid="footer-inner-container"
        className={`w-full ${MAX_CONTENT_WIDTH} flex justify-center flex-col gap-5 items-center py-4 `}
      >
        <div data-testid="footer-icon-container" className="flex gap-8 ">
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
        <span className="text-gray-50 text-[12px] md:text-[14px] lg:text-[18px] font-mono">
          @2025 Gustavo Leite
        </span>
      </div>
    </section>
  );
}
