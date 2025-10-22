import { MAX_CONTENT_WIDTH } from "../../utils/globalStyle";

import Image from "next/image";
import GLSmallLogo from "../../../../../public/icons/logo_small.svg";
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
        className={`w-full ${MAX_CONTENT_WIDTH} max-w-[1078px] flex justify-center flex-col lg:flex-row gap-4 lg:gap-0 lg:justify-between items-center py-4 lg:py-0`}
      >
        <Link href={"/"} className="hidden lg:block">
          <Image src={GLSmallLogo} alt="group icon" height={80} width={80} />
        </Link>
        <span className="hidden lg:block text-gray-50 text-[14px]">
          Gustavo Leite. Todos os direitos reservados
        </span>
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
        <span className="block lg:hidden text-gray-50 text-[12px]">
          Gustavo Leite. Todos os direitos reservados
        </span>
      </div>
    </section>
  );
}
