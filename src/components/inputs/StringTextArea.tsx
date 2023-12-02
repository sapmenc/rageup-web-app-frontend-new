import { Textarea, TextareaProps } from "@chakra-ui/react";
import stringInputProcessor from "../../helpers/input_processors/string";
import rageupInputProps from "../../helpers/rageupInputProps";

interface BasicInputProps<T> {
  placeholder?: string;
  isDisabled?: boolean;
  value: T | null;
  onChange: (x: T | null) => void;
}
type GenericInputProps<T> = BasicInputProps<T> &
  Omit<TextareaProps, "onChange" | "value" | "isDisabled" | "placeholder">;

type StringTextAreaProps = GenericInputProps<string>;

const StringTextArea = ({
  value,
  onChange,
  isDisabled,
  ...props
}: StringTextAreaProps) => {
  return (
    <Textarea
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

export default StringTextArea;
