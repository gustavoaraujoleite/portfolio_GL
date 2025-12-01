import Image from "next/image";
import BodyImage from "../../../../../../public/images/bodyshot.jpg";
import Link from "next/link";
import ButtonTemplate from "../ui/Button";

export default function AboutMeContent() {
  return (
    <section
      data-testid="aboutme-main-container"
      className="px-6 xl:px-4 flex flex-col items-center gap-6 lg:flex-row lg:justify-between"
    >
      <div
        data-testid="aboutme-main-image"
        className="relative rounded-2xl overflow-hidden max-w-[500px]"
      >
        <Image
          src={BodyImage}
          alt="Personal Image"
          width={1067}
          height={1600}
          className="rounded-2xl object-cover fade-mask-right w-full h-auto"
        />
      </div>

      <div
        data-testid="aboutme-description"
        className="font-sains flex flex-col gap-6 lg:max-w-[50%] items-center"
      >
        <h1 className="text-golden-yellow text-3xl font-semibold text-center">
          WHO AM I?
        </h1>
        <p className="text-gray-50 text-lg font-medium max-w-[80%] lg:max-w-[100%]">
          a software developer who loves turning complex problems into elegant,
          user-friendly solutions.I build web and mobile applications with
          React, Next.js, Node, and TypeScript, focusing on performance,
          scalability, and clean, maintainable code. From developing learning
          platforms that serve over 100,000 students to creating accessible
          websites and mobile apps, I enjoy crafting experiences that are both
          functional and intuitive.
          <br />
          <br />I believe software development is about more than just code,
          it’s about creating value, improving experiences, and solving real
          problems. I thrive in collaborative environments, love exploring new
          technologies, and constantly look for ways to make applications
          faster, cleaner, and more enjoyable for users.
          <br />
          <br /> Outside of work, my hobbies include playing the trumpet
          (especially at church), traveling, cooking, and reading, which help me
          stay creative, curious, and inspired.
        </p>
        <Link
          data-testid="aboutme-redirection-button"
          href={"/contact"}
          className="mt-8"
        >
          <ButtonTemplate title="Contact me" />
        </Link>
      </div>
    </section>
  );
}
