import {
  Avatar,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
} from "@chakra-ui/react";
import PageLayout from "../../../../layouts/PageLayout";
import {
  RAGE_UP_LIGHT_RED,
  RAGE_UP_RED,
  RAGE_UP_RED_HOVER,
} from "../../../../foundations/colors";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import FieldCheckLayout from "../../../../layouts/FieldCheckLayout";
import useAuth from "../../../../hooks/useAuth";

const SpecificMentorPage = () => {
  useAuth();
  const navigate = useNavigate();
  const pageLocation = useLocation();
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const onBookNow = () => {
    const route = pageLocation.pathname;
    navigate(`${route}/booking`);
  };
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
              Mentor Name
            </Heading>

            <Flex flexDir={"column"} gap={14} alignItems={"center"} w={"100%"}>
              {/* mentor details */}
              <Flex flexDir={"column"} gap={2} alignItems={"center"}>
                <Avatar
                  size="2xl"
                  name="Segun Adebayo"
                  src="https://bit.ly/sage-adebayo"
                />
                <Flex flexDir={"column"} alignItems={"center"}>
                  <Text fontSize="md">Strategic Consulting</Text>
                  <Text fontSize="md">Valuation</Text>
                </Flex>
              </Flex>

              {/* Skills Mastered */}
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
                  {[1, 2, 3, 4].map(() => {
                    return (
                      <GridItem
                        py={2}
                        px={8}
                        backgroundColor={RAGE_UP_LIGHT_RED}
                        rounded={"full"}
                        fontWeight={"bold"}
                        minW={40}
                        textAlign={"center"}
                      >
                        Valuations
                      </GridItem>
                    );
                  })}
                </Grid>
              </Flex>

              {/* Experience */}
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
                  {[1, 2].map(() => {
                    return (
                      <GridItem
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
                          <Text fontWeight={"bold"}>Valuations</Text>
                          <Text fontWeight={"light"}>Nov,22</Text>
                        </Flex>
                        <Flex flexDir={"column"}>
                          <Text fontWeight={"light"}>Assistant Manager</Text>
                          <Text fontWeight={"light"}>Transaction Square</Text>
                        </Flex>
                      </GridItem>
                    );
                  })}
                </Grid>
              </Flex>

              {/* Qualifications */}
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
                  {[1, 2].map(() => {
                    return (
                      <GridItem
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
                          Chartered Accountant
                        </Text>

                        <Text fontWeight={"light"} textAlign={"center"}>
                          Institute of Chartered Accountants of India
                        </Text>
                      </GridItem>
                    );
                  })}
                </Grid>
              </Flex>

              {/* My Story */}
              <Flex flexDir={"column"} gap={4} w={"100%"}>
                <Heading size="md" textAlign={"center"}>
                  My Story
                </Heading>
                {/* story text */}
                <Text
                  color={"#343434"}
                  fontSize={"xs"}
                  noOfLines={isExpanded ? 0 : 3}
                >
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Tempora odio expedita laudantium dicta officia ea voluptas
                  voluptatem, praesentium doloremque, sint rem ex voluptates
                  minima! Dicta voluptatibus velit vel culpa doloribus
                  temporibus magni rem nesciunt, asperiores corrupti cumque modi
                  suscipit sequi obcaecati ipsum ratione totam tempora natus
                  aperiam commodi, ad sed molestias. Pariatur necessitatibus ad
                  fugit consectetur debitis, sed rerum rem officia? Incidunt
                  debitis beatae consequuntur architecto mollitia laboriosam
                  eveniet earum temporibus maxime voluptate, esse, est totam nam
                  rem natus reiciendis quibusdam, ipsa velit ipsum? Quos nisi
                  consequatur enim aut aliquid! Error explicabo maxime dolorem
                  debitis numquam. Facilis expedita soluta ducimus repellendus.
                  Culpa provident sapiente tempora ex eum. Voluptate eos vel
                  facilis? Eligendi earum eveniet, obcaecati fugit mollitia
                  voluptates hic ex! Eos laudantium esse, accusamus quae ad
                  omnis, sapiente autem dolorem ipsam excepturi eius dicta
                  deleniti eligendi voluptatibus corporis veniam soluta ipsa
                  corrupti consequuntur tempore quas? Voluptatum aut hic nobis
                  nisi adipisci numquam accusamus odit odio natus dignissimos?
                  Nihil facere libero sapiente! Incidunt voluptatum doloremque
                  praesentium reiciendis tenetur eaque cumque, itaque unde at
                  odio iure ab eum possimus, ullam suscipit? Maiores modi
                  similique hic nulla cumque! Porro culpa, magnam unde
                  accusantium atque quia ad. Libero alias accusamus quia vel,
                  unde dignissimos!
                </Text>
                <Text
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
                </Text>
              </Flex>

              {/* Video */}
              <Flex rounded={"2xl"} overflow={"hidden"}>
                <Flex w={"90vw"} maxW={"lg"} aspectRatio={16 / 9}>
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/S5EpsMjel-M?si=hlDSWRlPxzLPQqRD"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  />
                </Flex>
              </Flex>

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
