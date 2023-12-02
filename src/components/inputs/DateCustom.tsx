import { Input } from "@chakra-ui/react";
import React, { ChangeEvent } from "react";
import rageupInputProps from "../../helpers/rageupInputProps";

interface DateProps {
  value: string | null;
  onChange: (x: string | null) => void;
}
const DateCustom: React.FC<DateProps> = ({ value, onChange }) => {
  return (
    <Input
      type="date"
      value={value || ""}
      onChange={(e: ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value || null);
      }}
      {...rageupInputProps}
    />
  );
};

export default DateCustom;
