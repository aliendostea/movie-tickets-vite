import {
  BoxInput,
  InputStyles,
  LabelStyle,
  SpanError,
} from "./Textfield.style";

interface inputTypes {
  id: string;
  name: string;
  label: string;
  placeholder: string;
  value: number | string;
  type?: string;
  fullWidth?: boolean;
  error: string | undefined;
  touched: boolean | undefined;
  onBlur: (e: React.FocusEvent<any, Element>) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Textfield: React.FC<inputTypes> = ({
  name,
  label,
  type = "text",
  error,
  touched,
  fullWidth,
  ...props
}) => {
  const isErrorActive = error && touched ? true : false;

  return (
    <BoxInput fullWidth={fullWidth}>
      <LabelStyle htmlFor={name} error={isErrorActive}>
        {label}
      </LabelStyle>
      <InputStyles error={isErrorActive} {...props} />

      {isErrorActive && <SpanError>{error}</SpanError>}
    </BoxInput>
  );
};

export default Textfield;
