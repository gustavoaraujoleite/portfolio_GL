import Image from "next/image";
import Link from "next/link";
type Props = {
  href: string;
  imageSrc: string;
};
export default function SocialMediaIcon({ href, imageSrc }: Props) {
  return (
    <Link
      href={href}
      data-testid="social-media-icon-container"
      target="_blank"
      className="hover:scale-150 transition-transform duration-150"
    >
      <div
        className="relative h-[32px] w-[32px]"
        data-testid="social-media-icon"
      >
        <Image src={imageSrc} alt="group icon" fill className="objetc-fill" />
      </div>
    </Link>
  );
}
