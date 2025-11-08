import { HTMLInputTypeAttribute } from "react";

type Props = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type: HTMLInputTypeAttribute;
  name: string;
};

export default function TextInput({
  value,
  onChange,
  placeholder,
  type,
  name,
}: Props) {
  return (
    <div
      data-testid="text-input-main-container"
      className="rounded-lg border border-golden-yellow p-4 w-full"
    >
      <input
        data-testid="text-input-component"
        className="outline-none bg-transparent placeholder:text-gray-50 text-gray-50 font-mono w-full"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        name={name}
      />
    </div>
  );
}
