import {
  Grid,
  GridItem,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useToast,
} from "@chakra-ui/react";
import PageLayout from "../../layouts/PageLayout";
import { RAGE_UP_RED } from "../../foundations/colors";
import MentorCard from "./components/MentorCard";
import SessionCard from "./components/SessionCard";
import useTitle from "../../hooks/useTitle";
import { getAllMentors } from "../../api/mentor";
import { useEffect, useState } from "react";
import FieldCheckLayout from "../../layouts/FieldCheckLayout";
import useAuth from "../../hooks/useAuth";

const MentorshipsPage = () => {
  useAuth();
  const toast = useToast();
  // eslint-disable-next-line
  const [mentors, setMentors] = useState<any[]>([]);
  const [, setLoading] = useState(false);
  const { setTitle } = useTitle();
  setTitle("RageUp - Mentorship");
  const fetchMentors = async () => {
    try {
      setLoading(true);
      const response = await getAllMentors();
      setMentors(response.data.data);
    } catch (err) {
      toast({
        title: "Error",
        description: "Mentors Not Fetched!",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchMentors();
  }, []);
  return (
    <PageLayout>
      <FieldCheckLayout>
        <Tabs
          px={{
            base: 0,
            lg: 10,
          }}
          colorScheme="white"
          display={"flex"}
          flexDir={"column"}
          alignItems={"center"}
          gap={5}
        >
          <TabList
            maxW={"lg"}
            w={"full"}
            pb={2}
            display={"flex"}
            backgroundColor={RAGE_UP_RED}
            color={"white"}
            fontWeight={"bold"}
            _active={{ color: RAGE_UP_RED }}
          >
            <Tab w={"full"}>Mentors</Tab>
            <Tab w={"full"}>Sessions</Tab>
          </TabList>

          {/* Mentors */}
          <TabPanels
            display={"flex"}
            maxW={"6xl"}
            w={"full"}
            justifyContent={"center"}
          >
            <TabPanel w={"full"} display={"flex"} flexDir={"column"} gap={5}>
              <Grid
                gap={5}
                gridTemplateColumns={{
                  base: "repeat(1, 1fr)",
                  lg: "repeat(2, 1fr)",
                }}
              >
                {mentors.map((mentor) => {
                  return (
                    <GridItem display={"flex"} justifyContent={"center"}>
                      <MentorCard
                        mentorId={mentor._id}
                        mentorName={mentor?.mentorName || ""}
                        image="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"
                        strengths={mentor?.strengths || ""}
                      />
                    </GridItem>
                  );
                })}
              </Grid>
            </TabPanel>

            {/* saved */}
            <TabPanel w={"full"}>
              <Grid
                gap={5}
                gridTemplateColumns={{
                  base: "repeat(1, 1fr)",
                  lg: "repeat(2, 1fr)",
                }}
              >
                {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map(() => {
                  return (
                    <GridItem display={"flex"} justifyContent={"center"}>
                      <SessionCard />
                    </GridItem>
                  );
                })}
              </Grid>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </FieldCheckLayout>
    </PageLayout>
  );
};

export default MentorshipsPage;
