import { Box, Button, Heading, Image, Stack, Text } from "@chakra-ui/react";
import CustomStack from "../../components/LandingPageComponent/CustomStack";

// IMAGES
import heroImage from "../../assets/landing-page/hero.png";
import aboutImage from "../../assets/landing-page/about-rageup.png";
import sec2img from "../../assets/landing-page/section2.png";
import featuresImage from "../../assets/landing-page/features-bg.png";
import mentorImage from "../../assets/landing-page/mentors.png";
import mentorHeroImage from "../../assets/landing-page/mentor.png";
import ContactUs from "../../components/LandingPageComponent/ContactUs";
import LandingFooter from "../../components/LandingPageComponent/LandingFooter";
import { NavWithGetStarted } from "../../components/navigation/Navbar";
import { RAGE_UP_RED, RAGE_UP_RED_HOVER } from "../../foundations/colors";
import useTitle from "../../hooks/useTitle";
// import { useNavigate } from "react-router-dom";

const HomePage = () => {
  // const navigate = useNavigate();
  const { setTitle } = useTitle();
  setTitle("RageUp");
  return (
    <Box>
      {/* <Flex>
        <Button
          onClick={() => {
            navigate("users/jsndl");
          }}
        >
          users/jsndl
        </Button>

        <Button
          onClick={() => {
            navigate("vacancies");
          }}
        >
          vacancies
        </Button>

        <Button
          onClick={() => {
            navigate("vacancies/kjsndfj");
          }}
        >
          vacancies/ksnjf
        </Button>
        <Button
          onClick={() => {
            navigate("learnings");
          }}
        >
          learnings
        </Button>
        <Button
          onClick={() => {
            navigate("mentorships");
          }}
        >
          mentorships
        </Button>
        <Button
          onClick={() => {
            navigate("user/ksdfb/experience");
          }}
        >
          user/ksdfb/experience
        </Button>
      </Flex> */}

      <Box>
        <NavWithGetStarted />
        <Box>
          <Stack
            w="80%"
            mx="auto"
            direction={["column", "column", "column", "row"]}
            justify={"center"}
            align={"center"}
          >
            <Stack w={["100%", "100%", "100%", "50%"]} position={"relative"}>
              <Stack
                justify={["center", "center", "center", "flex-start"]}
                align={["center", "center", "center", "flex-start"]}
                spacing={5}
              >
                <Stack w="100%" spacing={5}>
                  <Heading
                    fontWeight={"400"}
                    fontSize={["32px", "36px", "48px"]}
                  >
                    Experience the future of CA Education and Career
                    Development.
                  </Heading>
                  <Text
                    fontWeight={"400"}
                    fontSize={["18px", "20px", "24px"]}
                    textAlign={["center", "center", "center", "left"]}
                  >
                    Turn your
                    <Box
                      whiteSpace={"nowrap"}
                      as="span"
                      mx="1"
                      fontWeight="bold"
                    >
                      CA Articleship
                    </Box>
                    dreams into reality now!
                  </Text>
                </Stack>
                <Stack w={["100%"]}>
                  <Button
                    shadow={"md"}
                    w={40}
                    py={2}
                    px={10}
                    size={"lg"}
                    rounded={"full"}
                    fontSize={"lg"}
                    backgroundColor={RAGE_UP_RED}
                    color={"white"}
                    _hover={{ backgroundColor: RAGE_UP_RED_HOVER }}
                    onClick={() => {}}
                  >
                    Explore Rageup
                  </Button>
                </Stack>
              </Stack>
            </Stack>
            <Stack w={["100%", "100%", "100%", "50%"]}>
              <Image
                src={heroImage}
                w={["100%", "100%", "100%", "600px"]}
                h={["100%", "100%", "100%", "440px"]}
                objectFit={"contain"}
              />
            </Stack>
          </Stack>
          <CustomStack
            reverse={false}
            heading={"What's RageUp"}
            description={
              "We are a niche platform developed with the assistance of CA firms that allows aspirants to discover perfect Articleship Experience."
            }
            image={aboutImage}
          />
          <CustomStack
            reverse={true}
            heading={"Time to get to the heart of it!"}
            description={
              "Exploring articleship is like fitting puzzle pieces in a vast landscape. CA students often face several challenges during their practical training with no one there to lend a hand!"
            }
            image={sec2img}
          />
          <Box w="98%" mx={"auto"} position={"relative"}>
            <Image src={featuresImage} zIndex={1} />
            <Text
              position={"absolute"}
              top={"50%"}
              left={"50%"}
              transform={"translate(-50%, -50%)"}
              color={"white"}
              fontSize={"3rem"}
              fontWeight={"bold"}
              zIndex={2}
            >
              Features
            </Text>
          </Box>
          <CustomStack
            reverse={false}
            heading={"Discover Your Ideal Articleship Match"}
            description={
              "Its your opportunity to find perfect gear for your career’s engine. We'll help you join the firm where your skills and ambitions can come together and rightly fit in."
            }
            image={aboutImage}
          />
          {/* <CustomStack
          reverse={true}
          heading={"Take the Test and boost your chances"}
          description={"text"}
          image={aboutImage}
        /> */}
          {/* <CustomStack
          reverse={false}
          heading={"Apply for the right Articleship Vacancies"}
          description={"text"}
          image={aboutImage}
        /> */}
          <Stack w="80%" mx="auto">
            <Stack justify={"center"} align={"center"}>
              <Text fontSize={"2rem"} fontWeight={"bold"}>
                Learn
              </Text>
              <Text fontSize={"1.5rem"}>
                From our courses, mirroring the foundational learning required
                to kick start your professional careers.
              </Text>
            </Stack>
            <Stack justify={"center"} align={"center"}>
              <Image src={mentorHeroImage} />
            </Stack>
          </Stack>
          <CustomStack
            reverse={true}
            heading={"1 on 1 Mentorship works magic"}
            description={
              "No need to struggle alone anymore. Our Pros are here to directly answer all your questions."
            }
            image={mentorImage}
          />
          {/* <Stack w='80%' mx='auto' justify={'center'} align={'center'}>
          <Button>
            Get Started Now
          </Button>
        </Stack> */}
          <ContactUs />
          <LandingFooter />
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;
