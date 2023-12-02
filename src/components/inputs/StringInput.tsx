import { Input, InputProps } from "@chakra-ui/react";
import stringInputProcessor from "../../helpers/input_processors/string";
import rageupInputProps from "../../helpers/rageupInputProps";

interface BasicInputProps<T> {
  placeholder?: string;
  isDisabled?: boolean;
  value: T | null;
  onChange: (x: T | null) => void;
}
type GenericInputProps<T> = BasicInputProps<T> &
  Omit<InputProps, "onChange" | "value" | "isDisabled" | "placeholder">;

type StringInputProps = GenericInputProps<string>;

const StringInput = ({
  value,
  onChange,
  isDisabled,
  ...props
}: StringInputProps) => {
  return (
    <Input
      isDisabled={isDisabled}
      value={value ? value : ""}
      onChange={(e) => {
        const value = e.target.value;
        onChange(stringInputProcessor(value));
      }}
      {...props}
      {...rageupInputProps}
    />
  );
};

export default StringInput;
