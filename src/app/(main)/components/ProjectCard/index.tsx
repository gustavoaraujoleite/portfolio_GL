import { ReactNode } from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import ButtonTemplate from "../ui/Button";
import Badge from "../ui/Badge";

type Props = {
  src: StaticImageData;
  title: string;
  description: ReactNode;
  alt: string;
  buttonHref: string;
  buttonTitle: string;
  badgesArray: string[];
};

export default function ProjectCard({
  src,
  title,
  description,
  alt,
  buttonHref,
  buttonTitle,
  badgesArray,
}: Props) {
  return (
    <div
      data-testid="project-card-container"
      className="flex flex-col xl:flex-row gap-6"
    >
      <div
        data-testid="project-card-image"
        className="relative w-full xl:max-w-[55%] aspect-[16/9] rounded-xl overflow-hidden "
      >
        <Image src={src} fill alt={alt} />
      </div>
      <section
        data-testid="project-card-content-container"
        className="text-gray-50 w-full xl:max-w-[45%] flex flex-col justify-between"
      >
        <section
          data-testid="project-card-content"
          className="flex flex-col gap-4"
        >
          <h1 className="text-3xl font-semibold font-sans">{title}</h1>
          <div className="flex flex-row gap-2 flex-wrap">
            {badgesArray.map((item) => (
              <div key={item} data-testid="project-card-badge">
                <Badge title={item} />
              </div>
            ))}
          </div>
          <p className="whitespace-pre-line text-base font-sans">
            {description}
          </p>

          <Link
            data-testid="project-card-redirect-button"
            href={buttonHref}
            target="_blank"
            className="flex mt-4"
          >
            <ButtonTemplate title={buttonTitle} />
          </Link>
        </section>
      </section>
    </div>
  );
}
