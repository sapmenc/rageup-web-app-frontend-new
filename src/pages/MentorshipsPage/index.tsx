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
import { getBookingByUserId } from "../../api/booking";
import { withCookies } from "react-cookie";


const MentorshipsPage = (props:any) => {
  useAuth();
  const toast = useToast();
  const userId = props.cookies.get("user")?._id;
  // eslint-disable-next-line
  const [mentors, setMentors] = useState<any[]>([]);
  const [bookings,setBookings] = useState<any[]>([])
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
  useEffect(()=>{
    getBookingByUserId(userId).then(function(res){
      setBookings(res.data.data);
    }).catch(function(error){
      console.log("Error in fetching bookings by userId: ", error);
    })
  },[])
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
                {mentors.map((mentor,key) => {
                  return (
                    <GridItem display={"flex"} justifyContent={"center"} id={`${key}`}>
                      <MentorCard
                        mentorId={mentor._id}
                        mentorName={mentor?.mentorName || ""}
                        image={mentor?.profilePicture || ""}
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
                {bookings?.map((book,key) => {
                  return (
                    <GridItem w='100%' display={"flex"} justifyContent={"center"} id={`${key}`}>
                      <SessionCard mentorId={book?.mentor||""} slot={book?.slot||""} />
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

export default withCookies(MentorshipsPage);
