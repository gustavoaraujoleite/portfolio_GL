import MenuNav from "../MenuNav";
import SwitcherComponent from "../SwitcherComponent";
import SocialMediaIcon from "../ui/SocialMediaIcon";
import InstagramIcon from "../../../../../public/icons/Instagram.svg";
import GithubIcon from "../../../../../public/icons/Github.svg";
import LinkedinIcon from "../../../../../public/icons/Linkedin.svg";
type Props = {
  onButtonClick?: () => void;
};
export default function MobileMenuContent({ onButtonClick }: Props) {
  return (
    <section
      data-testid="mobile-menu-content-container"
      className="gap-20 flex flex-col mt-10 items-center "
    >
      <div data-testid="mobile-menu-nav-container">
        <MenuNav isHorizontal={false} onButtonClick={onButtonClick} />
      </div>
      <div data-testid="mobile-menu-switcher-container">
        <SwitcherComponent />
      </div>
      <div className=" flex justify-center flex-col gap-5 items-center py-4 ">
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
      </div>
    </section>
  );
}
