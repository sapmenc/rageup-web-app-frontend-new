import {
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  IconButton,
  Image,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { RAGE_UP_RED, RAGE_UP_RED_HOVER } from "../../../foundations/colors";
import { RAGE_UP_WHITE_LOGO } from "../../../foundations/logos";
import { AiOutlineMenu } from "react-icons/ai";
import { useMediaQuery } from "@chakra-ui/react";

import { useLocation } from "react-router-dom";
import React, { useEffect } from "react";
import { OptionProps, mainOptions, secondayOptions } from "../configs";
import useCustomNavigate from "../hooks/useCustomNavigate";

const SideBarOption: React.FC<OptionProps> = ({ link, label, pattern }) => {
  const { navigateMe } = useCustomNavigate();
  const route = useLocation().pathname;
  const isActive = pattern.test(route);
  return (
    <Text
      textAlign={"center"}
      cursor={"pointer"}
      py={2}
      px={2}
      w={"full"}
      fontWeight={"bold"}
      fontSize={"xl"}
      rounded={"2xl"}
      backgroundColor={isActive ? RAGE_UP_RED_HOVER : "transparent"}
      _hover={{
        backgroundColor: RAGE_UP_RED_HOVER,
      }}
      onClick={() => {
        navigateMe(label, link);
      }}
    >
      {label}
    </Text>
  );
};

const NavbarWithHamBurger = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLargerThan1024] = useMediaQuery("(max-width: 1024px)");
  useEffect(() => {
    onClose();
  }, [isLargerThan1024]);
  return (
    <Flex
      flexDir={"column"}
      zIndex={50}
      position={"fixed"}
      top={0}
      left={0}
      right={0}
    >
      <Flex
        backgroundColor={RAGE_UP_RED}
        justifyContent={"space-between"}
        alignItems={"center"}
        width={"100%"}
        py={1}
        px={3}
      >
        <Image src={RAGE_UP_WHITE_LOGO} h={20} />

        <IconButton
          onClick={onOpen}
          backgroundColor={RAGE_UP_RED}
          border={"1px white solid"}
          _hover={{
            backgroundColor: RAGE_UP_RED_HOVER,
          }}
          cursor={"pointer"}
          shadow={"md"}
          color={"white"}
          aria-label="Search database"
          icon={<AiOutlineMenu />}
        />
      </Flex>

      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent backgroundColor={RAGE_UP_RED} color={"white"}>
          <DrawerCloseButton />
          <DrawerHeader display={"flex"} justifyContent={"center"}>
            <Image src={RAGE_UP_WHITE_LOGO} h={36} />
          </DrawerHeader>
          <DrawerBody display={"flex"} flexDir={"column"} gap={3}>
            <Divider color={"white"} h={1} />

            {/* main options */}
            <Flex flexDir={"column"} alignItems={"center"} gap={3}>
              {mainOptions.map(({ link, label, pattern }, key) => {
                return (
                  <React.Fragment key={key}>
                    <SideBarOption
                      link={link}
                      label={label}
                      pattern={pattern}
                    />
                  </React.Fragment>
                );
              })}
            </Flex>

            <Divider color={"white"} h={1} />

            {/* secondary options */}
            <Flex flexDir={"column"} alignItems={"center"} gap={3}>
              {secondayOptions.map(({ link, label, pattern }, key) => {
                return (
                  <React.Fragment key={key}>
                    <SideBarOption
                      link={link}
                      label={label}
                      pattern={pattern}
                    />
                  </React.Fragment>
                );
              })}
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

export default NavbarWithHamBurger;
