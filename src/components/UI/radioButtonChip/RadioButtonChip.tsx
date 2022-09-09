import { RadioChipStyle } from "./RadioButtonChip.style";

interface RadioButtonChipTypes {
  name: string;
  label: string;
  isChecked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const RadioButtonChip = ({
  name,
  label,
  isChecked,
  onChange,
}: RadioButtonChipTypes) => {
  return (
    <RadioChipStyle key={label}>
      <input
        type="radio"
        id={label}
        value={label}
        name={name}
        onChange={onChange}
        checked={isChecked}
      />
      <label htmlFor={label}>{label}pm</label>
    </RadioChipStyle>
  );
};

export default RadioButtonChip;
