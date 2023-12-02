import { Flex, Image } from "@chakra-ui/react";
import { RAGE_UP_RED } from "../../../foundations/colors";
import { RAGE_UP_WHITE_LOGO } from "../../../foundations/logos";

const NavWithCenterLogo = () => {
  return (
    <Flex
      position={"fixed"}
      top={0}
      left={0}
      right={0}
      zIndex={50}
      backgroundColor={RAGE_UP_RED}
      justifyContent={"center"}
      alignItems={"center"}
      width={"100%"}
      py={1}
      px={3}
    >
      <Image src={RAGE_UP_WHITE_LOGO} h={20} />
    </Flex>
  );
};

export default NavWithCenterLogo;
