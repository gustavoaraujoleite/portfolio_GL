import Image from "next/image";
import HeadshotImage from "../../../../../public/images/headshot.jpg";
export default function AboutImage() {
  return (
    <div
      data-testid="about-image-container"
      className="relative w-[80%] md:w-[70%] lg:w-[56%] aspect-square"
    >
      <Image
        data-testid="about-image-children"
        src={HeadshotImage}
        alt="Portfolio headshot"
        fill
        className="rounded-full object-cover [mask-image:radial-gradient(circle_at_53%_34%,black_34%,transparent_72.5%)]"
      />
    </div>
  );
}
