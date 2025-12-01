import { HTMLInputTypeAttribute } from "react";

type Props = {
  value?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type: HTMLInputTypeAttribute;
  name: string;
  errorMessage?: string;
};

export default function TextInput({
  value,
  onChange,
  placeholder,
  type,
  name,
  errorMessage,
}: Props) {
  return (
    <div data-testid="text-input-main-container">
      <div
        data-testid="text-input-container"
        className="rounded-lg border border-golden-yellow p-4 w-full"
      >
        <input
          data-testid="text-input-component"
          className="outline-none bg-transparent placeholder:text-gray-100 text-gray-50 font-mono w-full"
          value={value ?? ""}
          onChange={onChange}
          placeholder={placeholder}
          type={type}
          name={name}
        />
      </div>
      {errorMessage && (
        <p
          data-testid="text-input-error-element"
          className="text-red-500 text-sm mt-2 font-sains"
        >
          {errorMessage}
        </p>
      )}
    </div>
  );
}
