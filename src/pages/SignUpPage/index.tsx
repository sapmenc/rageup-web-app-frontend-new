import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { RAGE_UP_RED } from "../../foundations/colors.ts";
import { RAGE_UP_RED_LOGO } from "../../foundations/logos.ts";
import PageLayout from "../../layouts/PageLayout.tsx";
import { Box, Button, Center, Image, Text, useToast } from "@chakra-ui/react";
import { LOGIN } from "../../routes/routeNames.ts";
import RageUpInput from "../../components/RageUpInput/index.tsx";
import { googleAuth, signup, verifyGoogleToken } from "../../api/auth.ts";
import useTitle from "../../hooks/useTitle.ts";
import webLayout from "../../assets/images/webLayout.jpg";
import { useCookies } from "react-cookie";
import { useGoogleLogin } from "@react-oauth/google";

const SignUpPage = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const { setTitle } = useTitle();
  setTitle("RageUp - Sign up");
  const [formData, setFormData] = useState({
    // Add more fields if needed
    name: "",
    email: "",
    password: "",
  });
  // eslint-disable-next-line
  // @ts-ignore
  const handleInputChange = (key, value) => {
    setFormData({
      ...formData,
      [key]: value,
    });
  };
  const [, setCookie] = useCookies();

  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      console.log(tokenResponse);
      const res = await verifyGoogleToken(tokenResponse?.access_token);
      console.log(res.data);
      let body = {
        name: res.data.name,
        email: res.data.email,
      }

      const res2 = await googleAuth(body);
      if (res2.status == 200 || res2.status == 201) {
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
    },
    flow: "implicit",
    onError: (err) => {
      console.log(err);
    },
  });

  const handleSignup = async () => {
    try {
      // Assuming your signup API returns a success status of 200
      const response = await signup(formData);

      if (response.status === 200 || response.status === 201) {
        // If the signup is successful, navigate to the login page
        navigate(LOGIN);
        toast({
          title: "Success",
          position: "top-right",
          description: "Signup Successful",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      } else {
        // Handle other response statuses or errors as needed
        console.error("Signup failed:", response);
      }
    } catch (err) {
      console.error("Error during signup:", err);
    }
  };
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
            <Image src={RAGE_UP_RED_LOGO} h={36} />
          </div> */}

          {/* signup and login btns */}
          <div className="flex flex-col items-center w-full gap-10">
            <div className="flex flex-col gap-4 max-w-64">
              <RageUpInput
                placeholder="Name"
                value={formData.name}
                // eslint-disable-next-line
                // @ts-ignore
                onChange={(e) => handleInputChange("name", e.target.value)}
              />
              <RageUpInput
                placeholder="Email"
                value={formData.email}
                // eslint-disable-next-line
                // @ts-ignore
                onChange={(e) => handleInputChange("email", e.target.value)}
              />
              <RageUpInput
                placeholder="Password"
                value={formData.password}
                // eslint-disable-next-line
                // @ts-ignore
                onChange={(e) => handleInputChange("password", e.target.value)}
              />
            </div>
            <Button
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
              onClick={handleSignup}
            >
              Proceed
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
                  <Text>Sign up with Google</Text>
                </Center>
              </Button>
            </div>
          </div>
        </Box>
      </div>
    </PageLayout>
  );
};

export default SignUpPage;
