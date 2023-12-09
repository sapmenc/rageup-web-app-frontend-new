import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

import { RAGE_UP_RED_LOGO } from "../../foundations/logos.ts";
import PageLayout from "../../layouts/PageLayout.tsx";
import {
  Box,
  Button,
  Center,
  Flex,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Spinner,
  Text,
  useToast,
} from "@chakra-ui/react";
// import { LOGIN } from "../../routes/routeNames.ts";
import RageUpInput from "../../components/RageUpInput/index.tsx";
import { useGoogleLogin } from "@react-oauth/google";
import { RAGE_UP_RED } from "../../foundations/colors.ts";
import { googleAuth, signin, verifyGoogleToken } from "../../api/auth.ts";
import { useState } from "react";
import { useCookies } from "react-cookie";
import useTitle from "../../hooks/useTitle.ts";
import webLayout from "../../assets/images/webLayout.jpg";

const LoginPage = () => {
  const [isLogging, setIsLogging] = useState<boolean>(false);
  const { setTitle } = useTitle();
  setTitle("RageUp - Login");
  const toast = useToast();
  const [, setCookie] = useCookies();
  const [, setLoading] = useState(false);
  const navigate = useNavigate();
  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      console.log(tokenResponse);
      const res = await verifyGoogleToken(tokenResponse?.access_token);
      let body = {
        name: res.data.name,
        email: res.data.email,
      };
      setIsLogging(true);
      const res2 = await googleAuth(body);
      if (res2.status === 200 || res2.status === 201) {
        setCookie("authToken", res2.data.data.token, {
          path: "/",
          // Expires after 1 day
          maxAge: 60 * 60 * 24,
          sameSite: true,
        });
        // let userData = {
        //   _id: res2.data.data._id,
        //   name: res2.data.data.name,
        //   email: res2.data.data.email,
        // }
        setCookie("user", res2.data.data, {
          path: "/",
          // Expires after 1 day
          maxAge: 60 * 60 * 24,
          sameSite: true,
        });
        navigate(`/users/${res2?.data?.data?._id}`);
        toast({
          title: "Success",
          position: "top-right",
          description: "Login successfully",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      }
      console.log(res2);
      // navigate(LOGIN);
      setIsLogging(false);
    },
    flow: "implicit",
    onError: (err) => {
      console.log(err);
      setIsLogging(false);
    },
  });
  // eslint-disable-next-line
  const handleLogin = async (e: any) => {
    setIsLogging(true);
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    // validation
    if (email === "" || password === "") {
      toast({
        title: "Error",
        description: "Please enter your username and password",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }
    try {
      setLoading(true);
      const body = {
        email: email,
        password: password,
      };
      // api calling
      const res = await signin(body);
      if (res.status === 200) {
        setCookie("authToken", res.data.data.token, {
          path: "/",
          // Expires after 1 day
          maxAge: 60 * 60 * 24,
          sameSite: true,
        });
        setCookie("user", res.data.data, {
          path: "/",
          // Expires after 1 day
          maxAge: 60 * 60 * 24,
          sameSite: true,
        });
        navigate(`/users/${res?.data?.data?._id}`);
        toast({
          title: "Success",
          position: "top-right",
          description: "Login successfully",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      }
    } catch (err) {
      console.log(err);
      toast({
        title: "Error",
        description: "Invalid username or password",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
      setIsLogging(false);
    }
  };
  return (
    <PageLayout>
      <>
        {isLogging && <LoginLoadModal />}
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
            {/* signup and login btns */}
            <form
              onSubmit={handleLogin}
              method="post"
              className="flex flex-col items-center w-full gap-10"
            >
              <div className="flex flex-col gap-4 max-w-[650px]">
                <RageUpInput name="email" type={"email"} placeholder="Email" />
                <RageUpInput
                  name="password"
                  type={"password"}
                  placeholder="Password"
                />
              </div>
              <Button
                type="submit"
                shadow={"md"}
                w={40}
                py={2}
                px={10}
                size={"lg"}
                rounded={"full"}
                fontSize={"lg"}
                backgroundColor={"white"}
                color={RAGE_UP_RED}
                _hover={{
                  backgroundColor: RAGE_UP_RED,
                  color: "white",
                  border: "solid 2px white",
                }}
              >
                Login
              </Button>

              <Text fontWeight={"bold"} fontSize={"lg"} color={"white"}>
                OR
              </Text>

              <div className="flex flex-col items-center gap-3">
                <Button
                  backgroundColor={"white"}
                  shadow={"md"}
                  w={"full"}
                  variant={"outline"}
                  leftIcon={<FcGoogle />}
                  rounded={"xl"}
                  onClick={() => login()}
                >
                  <Center>
                    <Text> Sign in with google</Text>
                  </Center>
                </Button>
              </div>
            </form>
          </Box>
        </div>
      </>
    </PageLayout>
  );
};

export default LoginPage;

const LoginLoadModal = () => {
  return (
    <Modal isOpen={true} onClose={() => {}}>
      <ModalOverlay />
      <ModalContent>
        <ModalBody>
          <Flex gap={4} justifyContent={"center"}>
            Logging in...
            <Spinner color="red.500" />
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
