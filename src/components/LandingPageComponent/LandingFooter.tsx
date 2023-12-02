import { Image, Link } from "@chakra-ui/react";
import { Box, Stack, Text, Flex } from "@chakra-ui/react";
import insta from "../../assets/images/insta-icon.png";
import yt from "../../assets/images/youtube-icon.png";
import wp from "../../assets/images/whatsapp.png";
import li from "../../assets/images/linkedin.png";
import rageupIcon from "../../assets/landing-page/rageup-footer-logo.png";
import { RAGE_UP_LIGHT_RED_HOVER, RAGE_UP_RED } from "../../foundations/colors";
import {
  PRIVACY_POLICY,
  REFUND_POLICY,
  TERMS_AND_CONDITIONS,
} from "../../routes/routeNames";

const LandingFooter = () => {
  return (
    <>
      <Box as="footer" width={"100%"} backgroundColor={RAGE_UP_LIGHT_RED_HOVER}>
        <Stack spacing={{ base: "4", md: "5" }}>
          <Flex direction={"column"}>
            <Flex
              justify={["space-around", "space-around", "space-around"]}
              direction={["column", "column", "row"]}
              align="center"
            >
              <Stack
                direction={"column"}
                width={["100vw", "100vw", "30vw"]}
                justify={["center", "center", "center"]}
                align={["center", "center", "start"]}
              >
                <Image
                  src={rageupIcon}
                  width={["200px", "200px", "300px", "320px"]}
                />
              </Stack>
              <Flex direction={"column"} mb={["2rem", "2rem", "1rem"]}>
                <Text
                  mb={"5px"}
                  fontWeight={"bold"}
                  fontSize={["2rem", "2rem", "2rem"]}
                  align={["center", "center", "center"]}
                >
                  Explore
                </Text>
                <Link href="/">
                  <Text align={["center", "center", "center"]} mb={"5px"}>
                    Home
                  </Text>
                </Link>
                <Link href="/allProducts">
                  <Text align={["center", "center", "center"]}>Store</Text>
                </Link>
              </Flex>
              <Flex direction={"column"} mb={["2rem", "2rem", "1rem"]}>
                <Text
                  fontWeight={"bold"}
                  fontSize={["2rem", "2rem", "2rem"]}
                  align={["center", "center", "justify"]}
                >
                  About
                </Text>
                <Text align={["center", "center", "center"]} mb={"5px"}>
                  About Us
                </Text>
                <Link href="/contact">
                  <Text align={["center", "center", "center"]} mb={"5px"}>
                    Contact Us
                  </Text>
                </Link>
              </Flex>
            </Flex>
            <Flex
              justify={["center", "center", "end"]}
              direction={"row"}
              pr={["0rem", "0rem", "1rem"]}
              mb={"0.3rem"}
              gap={5}
            >
              <Link href="https://wa.me/918149420499">
                <Image src={wp} width={7} cursor={"pointer"} />
              </Link>
              <Link href="https://instagram.com/rageup.in?igshid=MzRlODBiNWFlZA==">
                <Image src={insta} width={7} cursor={"pointer"} />
              </Link>
              <Link href="https://www.youtube.com/@RageUp-in">
                <Image src={yt} width={7} cursor={"pointer"} />
              </Link>
              <Link href="https://www.linkedin.com/company/rage-up/">
                <Image src={li} width={7} cursor={"pointer"} />
              </Link>
            </Flex>
            <Flex
              bgColor={RAGE_UP_RED}
              direction={["column", "row", "row"]}
              py={"1rem"}
              px={5}
              justifyContent={"space-between"}
              gap={3}
            >
              <Flex gap={5}>
                <Link
                  href={TERMS_AND_CONDITIONS}
                  _hover={{ textDecor: "underline white" }}
                >
                  <Text
                    color={"white"}
                    align={["center", "center", "center"]}
                    mb={"5px"}
                  >
                    Terms and Conditions
                  </Text>
                </Link>
                <Link
                  href={REFUND_POLICY}
                  _hover={{ textDecor: "underline white" }}
                >
                  <Text
                    color={"white"}
                    align={["center", "center", "center"]}
                    mb={"5px"}
                  >
                    Refund Policy
                  </Text>
                </Link>
                <Link
                  href={PRIVACY_POLICY}
                  _hover={{ textDecor: "underline white" }}
                >
                  <Text
                    color={"white"}
                    align={["center", "center", "center"]}
                    mb={"5px"}
                  >
                    Privacy Policy
                  </Text>
                </Link>
              </Flex>

              <Text color={"white"} align={"center"}>
                © 2023 Looko, All rights reserved
              </Text>
            </Flex>
          </Flex>
        </Stack>
      </Box>
    </>
  );
};

export default LandingFooter;
