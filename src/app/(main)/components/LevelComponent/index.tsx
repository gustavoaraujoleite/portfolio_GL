import LevelBar from "../ui/LevelBar";

type Props = {
  level: number;
  label: string;
};

export default function LevelComponent({ level, label }: Props) {
  return (
    <div
      data-testid="level-component-container"
      className="flex w-full gap-6 items-center justify-between"
    >
      <div
        data-testid="level-component-label"
        className="text-gray-50 font-mono text-lg w-[200px]"
      >
        {label}
      </div>
      <LevelBar level={level} />
    </div>
  );
}
