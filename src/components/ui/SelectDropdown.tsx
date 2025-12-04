import type { SelectDropdownProps } from "../../common/interface";

const SelectDropdown = ({
  label,
  options,
  value,
  onChange,
  className = "",
}: SelectDropdownProps) => {
  return (
    <div className="flex items-center gap-1">
      {label && <label className="text-sm font-medium">{label}</label>}

      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`border rounded-md px-3 py-1 outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      >
        {options.map((opt, index) => (
          <option key={index} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectDropdown;
