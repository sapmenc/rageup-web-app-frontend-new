import { Divider, Flex, Image } from "@chakra-ui/react";
import { RAGE_UP_RED } from "../../../foundations/colors";
import { RAGE_UP_WHITE_LOGO } from "../../../foundations/logos";
import { mainOptions, secondayOptions } from "../configs";
import React from "react";
import NavbarOption from "./NavbarOption";

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
