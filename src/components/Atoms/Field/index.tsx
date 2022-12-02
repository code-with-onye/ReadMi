type FieldProps = {
  type?: string;
  placeholder?: string;
  rows?: number;
  required?: boolean;
  label?: string;
};

export default function Field({ type, placeholder }: FieldProps) {
  return (
    <div className="w-full overflow-hidden rounded-lg">
      <input type="" placeholder="" className="w-full " />
    </div>
  );
}

export const TextArea = ({
  rows,
  placeholder,
  required,
  label,
}: FieldProps) => {
  return (
    <div className="w-full rounded-t-lg border-2 bg-white px-4 py-2">
      <label htmlFor="comment" className="sr-only">
        {label}
      </label>
      <textarea
        rows={rows}
        className="w-full border-0 bg-white px-0 text-sm text-gray-900 outline-none  focus:ring-0"
        placeholder={placeholder}
        required={required}
      ></textarea>
    </div>
  );
};
