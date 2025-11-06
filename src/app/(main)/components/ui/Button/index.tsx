type Props = {
  title: string;
};

export default function ButtonTemplate({ title }: Props) {
  return (
    <div
      data-testid="button-main-container"
      className="flex justify-center items-center px-6 py-2 text-black bg-golden-yellow rounded-lg border border-golden-yellow transition-all duration-300 hover:bg-black hover:text-golden-yellow"
    >
      <span
        data-testid="button-title"
        className="font-mono font-medium text-xl "
      >
        {title}
      </span>
    </div>
  );
}
