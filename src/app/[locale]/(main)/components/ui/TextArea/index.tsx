type Props = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  name: string;
  errorMessage?: string;
};

export default function TextArea({
  value,
  onChange,
  placeholder,
  name,
  errorMessage,
}: Props) {
  return (
    <div data-testid="text-area-main-container">
      <div
        data-testid="text-area-container"
        className="rounded-lg border border-golden-yellow p-4 w-full "
      >
        <textarea
          data-testid="text-area-component"
          className="outline-none bg-transparent placeholder:text-gray-100 text-gray-50 font-mono w-full min-h-[300px] scrollbar:w-[6px] scrollbar-track:rounded-md scrollbar-track:bg-gray-200 scrollbar-thumb:rounded-[2px] scrollbar-thumb:bg-golden-yellow"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          name={name}
          maxLength={800}
        />
      </div>
      {errorMessage && (
        <p
          data-testid="text-area-error-element"
          className="text-red-500 text-sm mt-2 font-sains"
        >
          {errorMessage}
        </p>
      )}
    </div>
  );
}
