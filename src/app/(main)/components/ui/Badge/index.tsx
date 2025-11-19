type Props = {
  title: string;
};

export default function Badge({ title }: Props) {
  return (
    <div
      data-testid="badge-main-container"
      className="flex justify-center items-center w-fit px-2 py-1 text-gray-50 bg-transparent rounded-lg border border-golden-yellow"
    >
      <span
        data-testid="badge-title"
        className="font-mono font-medium text-[13px]"
      >
        {title}
      </span>
    </div>
  );
}
