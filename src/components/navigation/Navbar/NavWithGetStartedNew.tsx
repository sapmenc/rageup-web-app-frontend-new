import {
    Button,
    Divider,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay,
    Flex,
    Image,
    Stack,
    useDisclosure,
  } from "@chakra-ui/react";
  import {
    RAGE_UP_RED,
    RAGE_UP_RED_HOVER,
    RAGE_UP_LIGHT_RED_HOVER,
  } from "../../../foundations/colors";
  import { RAGE_UP_RED_LOGO } from "../../../foundations/logos";
  import { useNavigate } from "react-router-dom";
  import { MAIN } from "../../../routes/routeNames";
  import { HamburgerIcon } from "@chakra-ui/icons";
  
  const NavWithGetStartedNew = () => {
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
          <DrawerContent             bg={RAGE_UP_RED}>
            {/* <Stack
              bg={RAGE_UP_RED}
              direction={"column"}
              width={"100%"}
              height={"100vh"}
              alignItems={"center"}
              py={10}
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
                  my={'30px'}
                >
                  {link.name}
                </Button>
              ))}
            </Stack> */}
                      <DrawerCloseButton color={'white'}/>
            <DrawerHeader display={"flex"} justifyContent={"center"}>
              <Image src={RAGE_UP_RED_LOGO} h={36} />
            </DrawerHeader>
            <DrawerBody display={"flex"} flexDir={"column"} gap={3}>
              <Divider color={"white"} h={1} />
  
              {/* main options */}
              <Flex flexDir={"column"} alignItems={"center"} gap={3}>
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
                  my={'30px'}
                >
                  {link.name}
                </Button>
              ))}
              </Flex>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
        <Flex
          position={"sticky"}
          top={0}
          left={0}
          right={0}
          zIndex={50}
          justifyContent={"space-between"}
          alignItems={"center"}
          width={"100%"}
          py={1}
          px={'50px'}
          boxShadow={'0px 0px 20px 0px black'}
          bgColor={'white'}
        >
          <Image src={RAGE_UP_RED_LOGO} h={20} />
          <Stack
            display={["none", "none", "none", "flex"]}
            direction={"row"}
            width={"48%"}
            justify="space-between"
            align={"center"}
          >
            {LANDING_LINKS.map((link) => (
              <Button
                key={link.name}
                variant={"link"}
                color={'black'}
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
          <Button
            display={["block", "block", "block", "none"]}
            rounded={"full"}
            backgroundColor={RAGE_UP_RED}
            color={"white"}
            fontWeight={700}
            transitionDuration={"100"}
            _hover={{ backgroundColor: RAGE_UP_RED_HOVER }}
            onClick={() => {
              navigate(MAIN);
            }}
          >
            Get Started
          </Button>
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
            px='30px'
            borderRadius={'17px'}
            backgroundColor={RAGE_UP_RED}
            color={"white"}
            fontWeight={700}
            transitionDuration={"100"}
            _hover={{ backgroundColor: RAGE_UP_RED_HOVER }}
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
  
  export default NavWithGetStartedNew;