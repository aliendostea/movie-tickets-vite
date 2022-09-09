import { FormStyle } from "./Form.style";

interface FormTypes {
  children: any;
  onSubmit: () => void;
}

const Form = ({ children, onSubmit }: FormTypes) => {
  return (
    <FormStyle onSubmit={onSubmit} aria-label="form">
      {children}
    </FormStyle>
  );
};

export default Form;
