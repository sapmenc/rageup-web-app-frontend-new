import PageLayout from "../../../../layouts/PageLayout";
import {
  Avatar,
  Button,
  Flex,
  Heading,
  Text,
  useToast,
} from "@chakra-ui/react";
import { RAGE_UP_RED, RAGE_UP_RED_HOVER } from "../../../../foundations/colors";
import { useEffect, useState } from "react";
import PaymentModal from "./modals/PaymentModal";
import FieldCheckLayout from "../../../../layouts/FieldCheckLayout";
import useAuth from "../../../../hooks/useAuth";
import { getMentorById } from "../../../../api/mentor";
import { useLocation } from "react-router-dom";
import { getUserById } from "../../../../api/user";
import { withCookies } from "react-cookie";
import { getAvailableSlotsById} from "../../../../api/booking";

const MentorBookingPage = (props: any) => {
  useAuth();
  const userId = props.cookies.get("user")?._id;
  const token = props.cookies.get("authToken");
  const [price, setPrice] = useState<number>(500);
  const toast = useToast();

  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState<boolean>(false);
  const pageLocation = useLocation();
  const route = pageLocation.pathname;
  const mentorId = route.split("/")[3];
  const [userData, setUserData] = useState<any>(null);
  const [availableSlots,setAvailableSlots] = useState<any[]>([])

  const onProceedToPay = () => {
    setIsPaymentModalOpen(true);
  };
  const [data, setData] = useState<any>();
  useEffect(() => {
    getMentorById(mentorId)
      .then(function (res) {
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

  useEffect(() => {
    getUserById(userId, token)
      .then(function (response) {
        setUserData(response?.data?.data);
      })
      .catch(function (error) {
        toast({
          title: "User data fetch error: check logs.",
          position: "top",
          status: "error",
          duration: 1000,
          isClosable: true,
          variant: "subtle",
        });
        console.log("Error in user data fetch:", error);
      });
  }, []);
  useEffect(()=>{
    getAvailableSlotsById(mentorId).then(function(res){
      setAvailableSlots(res.data.data);
      console.log(res.data.data)
    }).catch(function(error){
      console.log("Error while fetching Available Slots: ", error)
    })
  },[])
  useEffect(() => {
    // make query to get mentor session price
    setPrice(500);
  }, []);

  const mentorName = data?.mentorName || "";
  const imgUrl = data?.profilePicture || "";
  const strengths =
    data?.strengths && Array.isArray(data.strengths) ? data.strengths : [];
  const userName = userData?.name || "";
  const userEmail = userData?.email || "";
  return (
    <PageLayout>
      <FieldCheckLayout>
        <>
          {isPaymentModalOpen && (
            <PaymentModal
              userID={userId}
              mentorID={data?._id || ""}
              userNameProps={userName}
              userEmailProps={userEmail}
              slots={availableSlots}
              isOpen={isPaymentModalOpen}
              onClose={() => {
                setIsPaymentModalOpen(false);
              }}
              price={price}
            />
          )}
          <Flex
            justifyContent={"center"}
            pt={10}
            pb={{
              base: 20,
              lg: 0,
            }}
            position={"relative"}
          >
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
                {mentorName}
              </Heading>

              <Flex
                flexDir={"column"}
                gap={14}
                alignItems={"center"}
                w={"100%"}
              >
                {/* mentor details */}
                <Flex flexDir={"column"} gap={8} alignItems={"center"}>
                  <Avatar size="2xl" name="Segun Adebayo" src={imgUrl} />
                  <Flex flexDir={"column"} alignItems={"center"}>
                    {strengths
                      .filter((_: any, i: number) => i < 2)
                      .map((element: string, key: number) => (
                        <Text key={key} fontSize="md">
                          {element}
                        </Text>
                      ))}
                  </Flex>
                  <Flex flexDir={"column"} alignItems={"center"} gap={4}>
                    <Text textAlign={"center"}>
                      Charges per session will incur as you book a slot with
                      this mentor. Please select a specific date and time from
                      the available options to book your slot.
                    </Text>
                    <Text fontWeight={"bold"} textAlign={"center"}>
                      45 Minutes/session
                    </Text>
                  </Flex>
                </Flex>

                {/* Proceed to PAy */}
                {!isPaymentModalOpen && (
                  <Button
                    display={"flex"}
                    gap={20}
                    justifyContent={"space-between"}
                    zIndex={9999}
                    minW={"fit-content"}
                    size={"lg"}
                    rounded={"full"}
                    fontSize={"xl"}
                    backgroundColor={RAGE_UP_RED}
                    color={"white"}
                    _hover={{ backgroundColor: RAGE_UP_RED_HOVER }}
                    onClick={onProceedToPay}
                  >
                    <Text>Book Now</Text>
                  </Button>
                )}
              </Flex>
            </Flex>
          </Flex>
        </>
      </FieldCheckLayout>
    </PageLayout>
  );
};

export default withCookies(MentorBookingPage);
