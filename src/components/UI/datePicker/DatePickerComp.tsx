import TextField from "@mui/material/TextField";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DatePickerStyles } from "./DatePickerStyle.style";
import { createTheme, ThemeProvider } from "@mui/material";

interface DatePickerTypes {
  handleOnDatePickerChange: (date: {}) => void;
  value: {} | null;
}

const DatePickerComp = ({
  handleOnDatePickerChange,
  value,
}: DatePickerTypes) => {
  const theme = createTheme({
    typography: {
      htmlFontSize: 10,
    },
    palette: {
      mode: "dark",
    },
  });

  const handleChange = (newValue: any) => {
    handleOnDatePickerChange(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <DatePickerStyles id="132456">
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <DatePicker
            label="Date"
            value={value}
            onChange={handleChange}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </DatePickerStyles>
    </ThemeProvider>
  );
};

export default DatePickerComp;
