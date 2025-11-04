import Link from "next/link";
import AboutImage from "../AboutImage";
import ButtonTemplate from "../ui/Button";

export default function HomeContent() {
  return (
    <section
      data-testid="home-main-container"
      className="w-full h-full flex flex-col items-center gap-16"
    >
      <AboutImage />

      <div
        data-testid="home-intro-container"
        className="flex flex-col gap-1.5 font-sains text-center text-2xl md:text-[32px] text-gray-50"
      >
        <p>
          Hello, my name is{" "}
          <span
            data-testid="home-intro-highlight"
            className="text-golden-yellow"
          >
            {" "}
            Gustavo Leite
          </span>{" "}
        </p>
        <p>I am a Software Developer</p>
      </div>

      <Link href={"/about"} data-testid="home-redirection-button" >
        <ButtonTemplate title="About me" />
      </Link>
    </section>
  );
}
