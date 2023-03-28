import * as React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker as MUIDatePicker } from "@mui/x-date-pickers/DatePicker";

interface DatePickerProps {
  onChange: any;
  value?: string;
}

function DatePicker({ onChange, value }: DatePickerProps) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <MUIDatePicker
        onChange={(e: any) => onChange(e.$d)}
        // value={value || ""}
        sx={{ width: "100%" }}
        format="DD/MM/YYYY"
      />
    </LocalizationProvider>
  );
}

export default DatePicker;
