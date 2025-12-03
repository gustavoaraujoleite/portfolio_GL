export default function Spinner() {
  return (
    <div
      className="flex justify-center items-center h-fit"
      data-testid="spinner-container"
    >
      <div
        className="animate-spin rounded-full h-[32px] w-[32px] border-t-2 border-r-2 border-golden-yellow"
        data-testid="spinner-inner-component"
      ></div>
    </div>
  );
}
