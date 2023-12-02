import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Flex,
  Heading,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import SelectCustom from "../../../../../components/inputs/SelectCustom";
import orientationCourses from "../utils/orientationCourses";
import itts from "../utils/itts";
import expectedJoiningDates from "../utils/joiningDates";
import { withCookies } from "react-cookie";
import { updateUserProfile } from "../../../../../api/user";

interface EditProps {
  isOpen: boolean;
  onClose: () => void;
  // eslint-disable-next-line
  cookies: any;
  // eslint-disable-next-line
  data: any;
}

const Edit: React.FC<EditProps> = ({ isOpen, onClose, cookies, data }) => {
  const toast = useToast();
  const userId = cookies.get("user")?._id;
  const token = cookies.get("authToken");
  const [orientationCourse, setOrientationCourse] = useState<string | null>(
    (data?.articleshipCompliance?.orientationCourse as string) || null
  );
  const [itt, setItt] = useState<string | null>(
    (data?.articleshipCompliance?.itt as string) || null
  );
  const [expectedJoiningDate, setExpectedJoiningDate] = useState<string | null>(
    (data?.articleshipCompliance?.expectedJoiningDate as string) || null
  );

  const handleSave = () => {
    if (!orientationCourse) {
      toast({
        title: "Orientation Course Required!",
        position: "top",
        status: "error",
        duration: 1000,
        isClosable: true,
        variant: "subtle",
      });
      return;
    }
    if (!itt) {
      toast({
        title: "ITT Required!",
        position: "top",
        status: "error",
        duration: 1000,
        isClosable: true,
        variant: "subtle",
      });
      return;
    }
    if (!expectedJoiningDate) {
      toast({
        title: "Expected Joining Required!",
        position: "top",
        status: "error",
        duration: 1000,
        isClosable: true,
        variant: "subtle",
      });
      return;
    }
    const body = {
      articleshipCompliance: {
        orientationCourse,
        itt,
        expectedJoiningDate,
      },
    };
    updateUserProfile(userId, body, token)
      .then(function () {
        toast({
          title: "User data updated successfully",
          position: "top",
          status: "success",
          duration: 1000,
          isClosable: true,
          variant: "subtle",
        });
        onClose();
      })
      .catch(function (error) {
        toast({
          title: "Error in user data updation",
          position: "top",
          status: "success",
          duration: 1000,
          isClosable: true,
          variant: "subtle",
        });
        console.log("Error in user data fetch:", error);
        onClose();
      })
      .finally(() => {
        window.location.reload();
      });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent rounded={"2xl"}>
        <ModalHeader></ModalHeader>
        <ModalCloseButton />
        <ModalBody py={6}>
          <Flex flexDir={"column"} gap={8}>
            {/* Orientation Course */}
            <Flex flexDir={"column"} alignItems={"center"} gap={2}>
              <Heading size={"md"}>Orientation Course</Heading>
              <Flex flexDir={"column"} gap={3} w={"100%"}>
                <SelectCustom
                  list={orientationCourses}
                  value={orientationCourse}
                  onChange={setOrientationCourse}
                  placeholder="Orientation Course"
                />
              </Flex>
            </Flex>
            {/* ITT */}
            <Flex flexDir={"column"} alignItems={"center"} gap={2}>
              <Heading size={"md"}>ITT</Heading>
              <Flex flexDir={"column"} gap={3} w={"100%"}>
                <SelectCustom
                  list={itts}
                  value={itt}
                  onChange={setItt}
                  placeholder="ITT"
                />
              </Flex>
            </Flex>
            {/* Expected Joining Date */}
            <Flex flexDir={"column"} alignItems={"center"} gap={2}>
              <Heading size={"md"}>Expected Joining Date</Heading>
              <Flex flexDir={"column"} gap={3} w={"100%"}>
                <SelectCustom
                  list={expectedJoiningDates}
                  value={expectedJoiningDate}
                  onChange={setExpectedJoiningDate}
                  placeholder="Expected Joining Date"
                />
              </Flex>
            </Flex>
          </Flex>
        </ModalBody>

        <ModalFooter justifyContent={"center"}>
          <Button
            px={8}
            w={"sm"}
            color={"white"}
            bgColor={"#33a854"}
            _hover={{
              bgColor: "rgba(51,130,84)",
            }}
            rounded={"full"}
            onClick={handleSave}
          >
            Save Details
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default withCookies(Edit);
