import { ChairButtonStyle } from "./ChairButton.style";

interface ChairButtonTypes {
  id: string;
  status: string;
  name: string;
  disabled: boolean;
  checked: boolean;
  allDisabled: boolean;
  onClick: (id: string) => void | null;
}

const ChairButton = ({
  id,
  status,
  name,
  onClick,
  checked,
  disabled,
  allDisabled,
}: ChairButtonTypes) => {
  const handleOnClick = () => {
    if (disabled) return;
    onClick(id);
  };

  return (
    <ChairButtonStyle
      status={status}
      allDisabled={allDisabled}
      onClick={handleOnClick}
    >
      <label htmlFor={name}>
        <input
          type="checkbox"
          id={id}
          value={name}
          onChange={handleOnClick}
          checked={checked}
          disabled={disabled}
        />
        <span className="material-symbols-rounded">chair</span>
      </label>
    </ChairButtonStyle>
  );
};

export default ChairButton;
