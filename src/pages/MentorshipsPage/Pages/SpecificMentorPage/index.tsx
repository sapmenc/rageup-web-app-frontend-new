import {
  Avatar,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
  useToast,
} from "@chakra-ui/react";
import PageLayout from "../../../../layouts/PageLayout";
import {
  RAGE_UP_LIGHT_RED,
  RAGE_UP_RED,
  RAGE_UP_RED_HOVER,
} from "../../../../foundations/colors";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import FieldCheckLayout from "../../../../layouts/FieldCheckLayout";
import useAuth from "../../../../hooks/useAuth";
import { getMentorById } from "../../../../api/mentor";

const SpecificMentorPage = () => {
  useAuth();
  const toast = useToast();
  const navigate = useNavigate();
  const pageLocation = useLocation();
  const route = pageLocation.pathname;
  const mentorId = route.split("/")[3];
  // const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const onBookNow = () => {
    navigate(`${route}/booking`);
  };
  const [data, setData] = useState<any>();
  useEffect(() => {
    getMentorById(mentorId)
      .then(function (res) {
        console.log("res", res.data.data);
        setData(res.data.data);
      })
      .catch(function (error) {
        toast({
          title: "Error in Articleship history deletion",
          position: "top",
          status: "error",
          duration: 1000,
          isClosable: true,
          variant: "subtle",
        });
        console.log("Error in user data fetch:", error);
      });
  }, []);

  const strengths =
    data?.strengths && Array.isArray(data.strengths) ? data.strengths : [];
  const skills = data?.skills && Array.isArray(data.skills) ? data.skills : [];
  const exp = data?.exp && Array.isArray(data.exp) ? data.exp : [];
  const qualifications =
    data?.qualifications && Array.isArray(data.qualifications)
      ? data.qualifications
      : [];
  const story = data?.story || "";
  const video = data?.videoUrl || null;
  return (
    <PageLayout>
      <FieldCheckLayout>
        <Flex
          justifyContent={"center"}
          pt={10}
          pb={{
            base: 20,
            lg: 0,
          }}
          position={"relative"}
        >
          <Button
            display={{ lg: "none" }}
            bottom={20}
            position={"fixed"}
            zIndex={9999}
            minW={40}
            size={"lg"}
            rounded={"full"}
            fontSize={"lg"}
            backgroundColor={RAGE_UP_RED}
            color={"white"}
            _hover={{ backgroundColor: RAGE_UP_RED_HOVER }}
            onClick={onBookNow}
          >
            Book Now
          </Button>

          <Flex
            flexDirection={"column"}
            py={2}
            px={4}
            gap={10}
            w={"full"}
            maxW={"2xl"}
            alignItems={"center"}
          >
            {/* mentor name */}
            <Heading size="lg" textAlign={"center"}>
              {data?.mentorName || ""}
            </Heading>

            <Flex flexDir={"column"} gap={14} alignItems={"center"} w={"100%"}>
              {/* mentor details */}
              <Flex flexDir={"column"} gap={2} alignItems={"center"}>
                <Avatar
                  size="2xl"
                  name={data?.mentorName || ""}
                  src={data?.profilePicture || ""}
                />
                {strengths.length > 0 && (
                  <Flex flexDir={"column"} alignItems={"center"}>
                    {/* eslint-disable-next-line */}
                    {/* @ts-ignore */}
                    {strengths.map((strength, index) => {
                      return (
                        <Text key={index} fontSize="md">
                          {strength}
                        </Text>
                      );
                    })}
                  </Flex>
                )}
              </Flex>

              {/* Skills Mastered */}
              {skills.length > 0 && (
                <Flex flexDir={"column"} gap={4} w={"100%"}>
                  <Heading size="md" textAlign={"center"}>
                    Skills Mastered
                  </Heading>
                  <Grid
                    gap={5}
                    gridTemplateColumns={{
                      base: "repeat(1, 1fr)",
                      sm: "repeat(2, 1fr)",
                    }}
                    color={"#60677A"}
                  >
                    {/* eslint-disable-next-line */}
                    {/* @ts-ignore */}
                    {skills.map((skill, index) => {
                      return (
                        <GridItem
                          key={index}
                          py={2}
                          px={8}
                          backgroundColor={RAGE_UP_LIGHT_RED}
                          rounded={"full"}
                          fontWeight={"bold"}
                          minW={40}
                          textAlign={"center"}
                        >
                          {skill}
                        </GridItem>
                      );
                    })}
                  </Grid>
                </Flex>
              )}

              {/* Experience */}
              {exp.length > 0 && (
                <Flex flexDir={"column"} gap={4} w={"100%"}>
                  <Heading size="md" textAlign={"center"}>
                    Experience
                  </Heading>
                  <Grid
                    gap={5}
                    gridTemplateColumns={{
                      base: "repeat(1, 1fr)",
                    }}
                    color={"#60677A"}
                  >
                    {/* eslint-disable-next-line */}
                    {/* @ts-ignore */}
                    {exp.map((e, index) => {
                      return (
                        <GridItem
                          key={index}
                          py={4}
                          px={8}
                          backgroundColor={RAGE_UP_LIGHT_RED}
                          rounded={"xl"}
                          fontWeight={"semibold"}
                          w={"100%"}
                          display={"flex"}
                          flexDirection={"column"}
                          gap={2}
                        >
                          <Flex justifyContent={"space-between"}>
                            <Text fontWeight={"bold"}>
                              {e?.department || ""}
                            </Text>
                          </Flex>
                          <Flex flexDir={"column"}>
                            <Text fontWeight={"light"}>
                              {e?.designation || ""}
                            </Text>
                            <Text fontWeight={"light"}>
                              {e?.companyName || ""}
                            </Text>
                          </Flex>
                        </GridItem>
                      );
                    })}
                  </Grid>
                </Flex>
              )}

              {/* Qualifications */}
              {qualifications.length > 0 && (
                <Flex flexDir={"column"} gap={4} w={"100%"}>
                  <Heading size="md" textAlign={"center"}>
                    Qualifications
                  </Heading>
                  <Grid
                    gap={5}
                    gridTemplateColumns={{
                      base: "repeat(1, 1fr)",
                    }}
                    color={"#60677A"}
                  >
                    {/* eslint-disable-next-line */}
                    {/* @ts-ignore */}
                    {qualifications.map((qualification, index) => {
                      return (
                        <GridItem
                          key={index}
                          py={4}
                          px={8}
                          backgroundColor={RAGE_UP_LIGHT_RED}
                          rounded={"xl"}
                          fontWeight={"semibold"}
                          w={"100%"}
                          display={"flex"}
                          flexDirection={"column"}
                          gap={2}
                        >
                          <Text fontWeight={"bold"} textAlign={"center"}>
                            {qualification?.title || ""}
                          </Text>

                          <Text fontWeight={"light"} textAlign={"center"}>
                            {qualification?.institute || ""}
                          </Text>
                        </GridItem>
                      );
                    })}
                  </Grid>
                </Flex>
              )}

              {/* My Story */}
              {story && (
                <Flex flexDir={"column"} gap={4} w={"100%"}>
                  <Heading size="md" textAlign={"center"}>
                    My Story
                  </Heading>
                  {/* story text */}
                  <Text
                    color={"#343434"}
                    fontSize={"xs"}
                  // noOfLines={isExpanded ? 0 : 3}
                  >
                    {story}
                  </Text>
                  {/* <Text
                    color={"#343434"}
                    fontSize={"xs"}
                    display={"inline"}
                    cursor={"pointer"}
                    fontWeight={"bold"}
                    _hover={{
                      textDecoration: "underline",
                    }}
                    onClick={() => {
                      setIsExpanded((prev) => !prev);
                    }}
                  >
                    {isExpanded ? "Show Less" : "Read More"}
                  </Text> */}
                </Flex>
              )}

              {/* Video */}
              {video && (
                <Flex rounded={"2xl"} overflow={"hidden"}>
                  <Flex w={"90vw"} maxW={"lg"} aspectRatio={16 / 9}>
                    <iframe
                      width="100%"
                      height="100%"
                      src={video}
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    />
                  </Flex>
                </Flex>
              )}

              {/* book */}
              <Button
                display={{ base: "none", lg: "block" }}
                zIndex={9999}
                minW={60}
                size={"lg"}
                rounded={"full"}
                fontSize={"xl"}
                backgroundColor={RAGE_UP_RED}
                color={"white"}
                _hover={{ backgroundColor: RAGE_UP_RED_HOVER }}
                onClick={onBookNow}
              >
                Book Now
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </FieldCheckLayout>
    </PageLayout>
  );
};

export default SpecificMentorPage;
