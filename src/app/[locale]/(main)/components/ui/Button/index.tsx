type Props = {
  title: string;
  disabled?: boolean;
};

export default function ButtonTemplate({ title, disabled }: Props) {
  return (
    <div
      data-testid="button-main-container"
      className={`flex justify-center items-center px-6 py-2 text-black bg-golden-yellow rounded-lg border border-golden-yellow transition-all duration-300 ${!disabled ? "hover:bg-black hover:text-golden-yellow cursor-pointer" : "cursor-not-allowed"}`}
    >
      <span
        data-testid="button-title"
        className="font-mono font-medium text-base md:text-xl "
      >
        {title}
      </span>
    </div>
  );
}
