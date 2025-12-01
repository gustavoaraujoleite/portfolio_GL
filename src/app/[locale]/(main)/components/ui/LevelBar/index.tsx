type Props = {
  level: number;
};
export default function LevelBar({ level }: Props) {
  return (
    <div
      data-testid="level-bar-container"
      className={`h-2.5 flex items-center rounded relative w-full border border-gray-50`}
    >
      <span
        data-testid="level-bar"
        className={`absolute h-1.5 rounded ${
          level < 34
            ? "bg-spring-green"
            : level >= 35 && level < 68
            ? "bg-dark-orange"
            : "bg-coral-red"
        }`}
        style={{ width: `${level}%` }}
      ></span>
    </div>
  );
}
