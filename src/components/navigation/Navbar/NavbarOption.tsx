import { Box, Flex, Text } from "@chakra-ui/react";
import { RAGE_UP_RED_HOVER } from "../../../foundations/colors";
import useCustomNavigate from "../hooks/useCustomNavigate";
import { useLocation } from "react-router-dom";
import { OptionProps } from "../configs";
import { withCookies } from "react-cookie";

const NavbarOption: React.FC<OptionProps> = ({
  label,
  Icon,
  pattern,
  link,
  cookies,
}) => {
  const { navigateMe } = useCustomNavigate();
  const route = useLocation().pathname;
  const isActive = pattern.test(route);

  return (
    <Flex
      flexDir={"column"}
      w={"full"}
      onClick={() => {
        navigateMe(label, link);
      }}
    >
      <Flex
        py={2}
        flexDir={"column"}
        alignItems={"center"}
        cursor={"pointer"}
        w={"full"}
        color={"white"}
        rounded={"lg"}
        backgroundColor={isActive ? RAGE_UP_RED_HOVER : "transparent"}
        _hover={{
          backgroundColor: RAGE_UP_RED_HOVER,
          boxShadow: "inner",
          shadow: "lg",
        }}
      >
        {Icon && <Icon size={32} />}
        <Text fontWeight={"semibold"} fontSize={"sm"}>
          {label}
        </Text>
      </Flex>
      <Box
        w={"full"}
        h={1}
        backgroundColor={isActive ? "white" : "transparent"}
      ></Box>
    </Flex>
  );
};

export default withCookies(NavbarOption);
