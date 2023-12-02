import { Input, InputProps } from "@chakra-ui/react";
import rageupInputProps from "../../helpers/rageupInputProps";

interface BasicInputProps<T> {
  placeholder?: string;
  isDisabled?: boolean;
  value: T | null;
  onChange: (x: T | null) => void;
}
type GenericInputProps<T> = BasicInputProps<T> &
  Omit<InputProps, "onChange" | "value" | "isDisabled" | "placeholder">;

type NumberInputProps = GenericInputProps<string>;

const NumberInput = ({
  value,
  onChange,
  isDisabled,
  ...props
}: NumberInputProps) => {
  return (
    <Input
      width={"full"}
      isDisabled={isDisabled}
      // eslint-disable-next-line
      // @ts-ignore
      value={!value || value === 0 ? "" : value + ""}
      onChange={(e) => {
        if (e.target.value === "") {
          onChange(null);
          return;
        }
        const value = parseInt(e.target.value);
        if (!isNaN(value)) {
          // eslint-disable-next-line
          // @ts-ignore
          onChange(value);
        }
      }}
      {...props}
      {...rageupInputProps}
    />
  );
};

export default NumberInput;
