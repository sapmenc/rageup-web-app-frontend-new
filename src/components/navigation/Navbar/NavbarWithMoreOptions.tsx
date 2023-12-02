import { Box, Divider, Flex, Image, Text } from "@chakra-ui/react";
import { RAGE_UP_RED, RAGE_UP_RED_HOVER } from "../../../foundations/colors";
import { RAGE_UP_WHITE_LOGO } from "../../../foundations/logos";
import { useLocation } from "react-router-dom";
import { OptionProps, mainOptions, secondayOptions } from "../configs";
import useCustomNavigate from "../hooks/useCustomNavigate";
import React from "react";

const NavbarOption: React.FC<OptionProps> = ({
  label,
  Icon,
  pattern,
  link,
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
const NavbarWithMoreOptions = () => {
  return (
    <Flex
      position={"fixed"}
      top={0}
      left={0}
      right={0}
      zIndex={50}
      backgroundColor={RAGE_UP_RED}
      justifyContent={"space-between"}
      alignItems={"center"}
      width={"100%"}
      py={1}
      px={3}
    >
      <Image src={RAGE_UP_WHITE_LOGO} h={20} />
      <Flex gap={3} w={"650px"} minW={"650px"}>
        {mainOptions.map(({ label, Icon, pattern, link }, key) => {
          return (
            <React.Fragment key={key}>
              <NavbarOption
                label={label}
                Icon={Icon}
                pattern={pattern}
                link={link}
              />
            </React.Fragment>
          );
        })}
        <Divider orientation="vertical" h={16} />
        {secondayOptions.map(({ label, Icon, pattern, link }, key) => {
          return (
            <React.Fragment key={key}>
              <NavbarOption
                label={label}
                Icon={Icon}
                pattern={pattern}
                link={link}
              />
            </React.Fragment>
          );
        })}
      </Flex>
    </Flex>
  );
};

export default NavbarWithMoreOptions;
