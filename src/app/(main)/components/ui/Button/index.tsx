type Props = {
  title: string;
};

export default function ButtonTemplate({ title }: Props) {
  return (
    <div
      data-testid="button-main-container"
      className="flex justify-center items-center px-6 py-2 bg-golden-yellow rounded-lg hover:bg-opacity-95 shadow-[0_0_10px_rgba(255,255,255,0.15)] hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] transition-all duration-150"
    >
      <span
        data-testid="button-title"
        className="text-black font-mono font-medium text-xl"
      >
        {title}
      </span>
    </div>
  );
}
