import NavButton from "../ui/NavButton";

type Props = {
  isHorizontal: boolean;
  onButtonClick?: () => void;
};
export default function MenuNav({ isHorizontal, onButtonClick }: Props) {
  return (
    <section
      data-testid="menu-nav-container"
      className={`flex ${
        isHorizontal
          ? "flex-row items-center gap-6 md:gap-4"
          : "flex-col justify-center text-center gap-6"
      }  `}
      onClickCapture={() => {
        if (onButtonClick) {
          onButtonClick();
        }
        return
      }}
    >
      <NavButton href="/home" title="Home" />
      <NavButton href="/about" title="About me" />
      <NavButton href="/experience" title="Experience" />
      <NavButton href="/contact" title="Contact" />
    </section>
  );
}
