import { Input } from "@chakra-ui/react";

const RageUpInput = ({ ...restProps }) => {
  return (
    <Input
      w={"full"}
      rounded={"xl"}
      py={2}
      px={4}
      borderWidth={2}
      backgroundColor={"white"}
      outlineColor={"transparent"}
      _placeholder={{
        color: "#7C7C7C",
        fontWeight: "semibold",
      }}
      _focusVisible={{ outline: "none" }}
      {...restProps}
    />
  );
};

export default RageUpInput;
