import React from "react";
import { Select } from "@chakra-ui/react";
import rageupInputProps from "../../../helpers/rageupInputProps";

interface SelectCustomProps {
  list: string[];
  value: string | null;
  onChange: (x: string | null) => void;
  placeholder: string;
  valueFunction?: (x: string) => string;
}
const SelectCustom: React.FC<SelectCustomProps> = ({
  list,
  value,
  onChange,
  placeholder,
  valueFunction,
}) => {
  return (
    <Select
      w={"100%"}
      placeholder={placeholder}
      color={!value ? "#9ca3af" : "black"}
      value={value ? value : ""}
      onChange={(e) => {
        const value = e.target.value;
        onChange(value ? value : null);
      }}
      {...rageupInputProps}
    >
      {list.map((item) => (
        <option value={valueFunction ? valueFunction(item) : item}>
          {item}
        </option>
      ))}
    </Select>
  );
};

export default SelectCustom;
