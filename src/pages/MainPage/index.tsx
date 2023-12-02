import { useNavigate } from "react-router-dom";
import {
  RAGE_UP_LIGHT_RED,
  RAGE_UP_LIGHT_RED_HOVER,
  RAGE_UP_RED,
} from "../../foundations/colors.ts";
import {
  RAGE_UP_RED_LOGO,
  // RAGE_UP_WHITE_LOGO,
} from "../../foundations/logos.ts";
import PageLayout from "../../layouts/PageLayout.tsx";
import { Box, Button, Image, Text } from "@chakra-ui/react";
import { LOGIN, SIGNUP } from "../../routes/routeNames.ts";
import useTitle from "../../hooks/useTitle.ts";
import webLayout from "../../assets/images/webLayout.jpg";

const MainPage = () => {
  const navigate = useNavigate();
  const { setTitle } = useTitle();
  setTitle("RageUp");
  return (
    <PageLayout>
      <div className="flex min-h-[calc(100vh-88px)] bg-white">
        {/* left */}
        <div className="hidden w-full lg:flex lg:justify-center lg:items-center">
          <Image src={RAGE_UP_RED_LOGO} h={64} />
        </div>
        {/* right */}
        <Box
          backgroundImage={webLayout}
          backgroundSize={"cover"}
          backgroundPosition={"center"}
          className="flex flex-col gap-20 justify-center items-center w-full lg:w-[635px] lg:shrink-0 lg:shadow-lg lg:shadow-black lg:rounded-2xl overflow-hidden"
        >
          {/* logo */}
          {/* <div className="lg:hidden">
            <Image src={RAGE_UP_WHITE_LOGO} h={36} />
          </div> */}

          {/* signup and login btns */}
          <div className="flex flex-col items-center gap-10">
            <Button
              w={40}
              py={2}
              px={10}
              size={"lg"}
              rounded={"xl"}
              fontSize={"lg"}
              backgroundColor={"white"}
              color={RAGE_UP_RED}
              _hover={{
                backgroundColor: RAGE_UP_RED,
                color: "white",
                border: "solid 2px white",
              }}
              onClick={() => {
                navigate(SIGNUP);
              }}
            >
              Sign up
            </Button>

            <div className="flex flex-col items-center gap-8">
              <Text fontWeight={"bold"} color={"white"}>
                Already have an account?
              </Text>
              <Button
                w={40}
                py={5}
                px={10}
                size={"sm"}
                rounded={"xl"}
                fontSize={"sm"}
                backgroundColor={RAGE_UP_LIGHT_RED}
                color={"black"}
                _hover={{
                  backgroundColor: RAGE_UP_LIGHT_RED_HOVER,
                }}
                onClick={() => {
                  navigate(LOGIN);
                }}
              >
                Login
              </Button>
            </div>
          </div>
        </Box>
      </div>
    </PageLayout>
  );
};

export default MainPage;
