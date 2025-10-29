import AboutImage from "../components/AboutImage";

export default function Home() {
  return (
    <section
      data-testid="home-main-container"
      className="w-full h-full flex flex-col items-center gap-8"
    >
      <AboutImage />
    </section>
  );
}
