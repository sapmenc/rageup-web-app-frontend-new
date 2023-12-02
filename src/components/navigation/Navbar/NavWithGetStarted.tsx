import {
  Button,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Image,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import {
  RAGE_UP_LIGHT_RED,
  RAGE_UP_RED,
  RAGE_UP_LIGHT_RED_HOVER,
} from "../../../foundations/colors";
import { RAGE_UP_WHITE_LOGO } from "../../../foundations/logos";
import { useNavigate } from "react-router-dom";
import { MAIN } from "../../../routes/routeNames";
import { HamburgerIcon } from "@chakra-ui/icons";

const NavWithGetStarted = () => {
  const navigate = useNavigate();
  const LANDING_LINKS = [
    { name: "About", link: MAIN },
    { name: "Solutions", link: MAIN },
    { name: "Features", link: MAIN },
    { name: "Contact Us", link: MAIN },
  ];
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Drawer isOpen={isOpen} placement={"left"} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <Stack
            direction={"column"}
            width={"100%"}
            height={"100vh"}
            justifyContent={"space-between"}
            alignItems={"center"}
            py={10}
          >
            {LANDING_LINKS.map((link) => (
              <Button
                key={link.name}
                variant={"link"}
                color={"black"}
                fontWeight={700}
                transitionDuration={"100"}
                _hover={{ backgroundColor: RAGE_UP_LIGHT_RED_HOVER }}
                onClick={() => {
                  navigate(link.link);
                }}
              >
                {link.name}
              </Button>
            ))}
          </Stack>
        </DrawerContent>
      </Drawer>
      <Flex
        position={"sticky"}
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
        <Stack
          display={["none", "none", "none", "flex"]}
          direction={"row"}
          width={"40%"}
          justify="space-between"
          align={"center"}
        >
          {LANDING_LINKS.map((link) => (
            <Button
              key={link.name}
              variant={"link"}
              color={"white"}
              fontWeight={700}
              transitionDuration={"100"}
              _hover={{ backgroundColor: RAGE_UP_LIGHT_RED_HOVER }}
              onClick={() => {
                navigate(link.link);
              }}
            >
              {link.name}
            </Button>
          ))}
        </Stack>
        <HamburgerIcon
          display={["block", "block", "block", "none"]}
          onClick={() => {
            // console.log("clicked");
            onOpen();
          }}
          color={"white"}
          w={8}
          h={8}
          cursor={"pointer"}
        />
        <Button
          display={["none", "none", "none", "block"]}
          rounded={"full"}
          backgroundColor={RAGE_UP_LIGHT_RED}
          color={"black"}
          fontWeight={700}
          transitionDuration={"100"}
          _hover={{ backgroundColor: RAGE_UP_LIGHT_RED_HOVER }}
          onClick={() => {
            navigate(MAIN);
          }}
        >
          Get Started
        </Button>
      </Flex>
    </>
  );
};

export default NavWithGetStarted;
