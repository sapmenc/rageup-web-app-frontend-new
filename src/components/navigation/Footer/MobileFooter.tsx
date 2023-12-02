import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import { useLocation } from "react-router-dom";
import { RAGE_UP_RED } from "../../../foundations/colors";
import { OptionProps, mainOptions } from "../configs";
import useCustomNavigate from "../hooks/useCustomNavigate";

const MobileFooterOption: React.FC<OptionProps> = ({
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
      py={2}
      gap={1}
      flexDir={"column"}
      alignItems={"center"}
      cursor={"pointer"}
      w={"full"}
      backgroundColor={isActive ? "#E2E8F0" : "white"}
      _hover={{
        backgroundColor: "#EDF2F7",
      }}
      onClick={() => {
        navigateMe(label, link);
      }}
    >
      {Icon && <Icon size={32} />}
      <Text
        fontWeight={"semibold"}
        color={isActive ? RAGE_UP_RED : "#60677A"}
        fontSize={"sm"}
      >
        {label}
      </Text>
    </Flex>
  );
};
const MobileFooter = () => {
  return (
    <Flex
      justifyContent={"space-evenly"}
      position={"fixed"}
      bottom={0}
      left={0}
      right={0}
      zIndex={50}
      backgroundColor={"white"}
    >
      {mainOptions.map(({ label, Icon, pattern, link }, key) => {
        return (
          <React.Fragment key={key}>
            <MobileFooterOption
              label={label}
              link={link}
              Icon={Icon}
              pattern={pattern}
            />
          </React.Fragment>
        );
      })}
    </Flex>
  );
};

export default MobileFooter;
