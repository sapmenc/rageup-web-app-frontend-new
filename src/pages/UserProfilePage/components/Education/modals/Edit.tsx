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
  Text,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import SelectCustom from "../../../../../components/inputs/SelectCustom";
import degrees from "../utils/degrees";
import { groupMonths, months } from "../utils/months";
import articleshipStatuses from "../utils/articleshipStatuses";
import years from "../utils/years";
import NumberInput from "../../../../../components/inputs/NumberInput";
import StringInput from "../../../../../components/inputs/StringInput";
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
  const [degree, setDegree] = useState<string | null>(
    (data?.educations?.degree as string) || null
  );
  const [month, setMonth] = useState<string | null>(
    (data?.educations?.month as string) || null
  );
  const [year, setYear] = useState<string | null>(
    (data?.educations?.year as string) || null
  );
  const [articleshipStatus, setArticleshipStatus] = useState<string | null>(
    (data?.educations?.articleshipStatus as string) || null
  );
  const [g1Month, setG1Month] = useState<string | null>(
    (data?.educations?.g1Month as string) || null
  );
  const [g1Year, setG1Year] = useState<string | null>(
    (data?.educations?.g1Year as string) || null
  );
  const [g2Month, setG2Month] = useState<string | null>(
    (data?.educations?.g2Month as string) || null
  );
  const [g2Year, setG2Year] = useState<string | null>(
    (data?.educations?.g2Year as string) || null
  );
  const [g1Attempts, setG1Attempts] = useState<string | null>(
    (data?.educations?.g1Attempts as string) || null
  );
  const [g2Attempts, setG2Attempts] = useState<string | null>(
    (data?.educations?.g2Attempts as string) || null
  );
  const [score10, setScore10] = useState<string | null>(
    (data?.educations?.score10 as string) || null
  );
  const [score12, setScore12] = useState<string | null>(
    (data?.educations?.score12 as string) || null
  );

  const handleSave = () => {
    if (!degree) {
      toast({
        title: "Degree Required!",
        position: "top",
        status: "error",
        duration: 1000,
        isClosable: true,
        variant: "subtle",
      });
      return;
    }
    // if (!month) {
    //   toast({
    //     title: "Month Required!",
    //     position: "top",
    //     status: "error",
    //     duration: 1000,
    //     isClosable: true,
    //     variant: "subtle",
    //   });
    //   return;
    // }
    // if (!year) {
    //   toast({
    //     title: "Year Required!",
    //     position: "top",
    //     status: "error",
    //     duration: 1000,
    //     isClosable: true,
    //     variant: "subtle",
    //   });
    //   return;
    // }
    if (!articleshipStatus) {
      toast({
        title: "Articleship Status Required!",
        position: "top",
        status: "error",
        duration: 1000,
        isClosable: true,
        variant: "subtle",
      });
      return;
    }
    if (!score12) {
      toast({
        title: "Scores in 12th Required!",
        position: "top",
        status: "error",
        duration: 1000,
        isClosable: true,
        variant: "subtle",
      });
      return;
    }
    // if (!score10) {
    //   toast({
    //     title: "Scores in 10th Required!",
    //     position: "top",
    //     status: "error",
    //     duration: 1000,
    //     isClosable: true,
    //     variant: "subtle",
    //   });
    //   return;
    // }
    const body = {
      educations: {
        degree,
        month,
        year,
        articleshipStatus,
        g1Attempts,
        g1Month,
        g1Year,
        g2Attempts,
        g2Month,
        g2Year,
        score10,
        score12,
      },
    };
    console.log(body);
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
            {/* Bachelors Degree */}
            <Flex flexDir={"column"} alignItems={"center"} gap={2}>
              <Heading size={"md"}>Bachelors Degree</Heading>
              <Flex flexDir={"column"} gap={3} w={"100%"}>
                <SelectCustom
                  list={degrees}
                  value={degree}
                  onChange={setDegree}
                  placeholder="Degree (Mandatory)"
                />
                <Flex flexDir={"column"} gap={2} w={"100%"}>
                  <Text fontWeight={"sm"} textAlign={"center"}>
                    Date of Completion
                  </Text>
                  <Flex gap={2}>
                    <SelectCustom
                      list={months}
                      value={month}
                      onChange={setMonth}
                      placeholder="Month"
                    />
                    <SelectCustom
                      list={years}
                      value={year}
                      onChange={setYear}
                      placeholder="Year"
                    />
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
            {/* Articleship */}
            <Flex flexDir={"column"} alignItems={"center"} gap={2}>
              <Heading size={"md"}>Articleship</Heading>
              <Flex flexDir={"column"} gap={3} w={"100%"}>
                <SelectCustom
                  list={articleshipStatuses}
                  value={articleshipStatus}
                  onChange={setArticleshipStatus}
                  placeholder="Articleship Status"
                />
              </Flex>
            </Flex>
            {/* Intermediate */}
            <Flex flexDir={"column"} alignItems={"center"} gap={2}>
              <Heading size={"md"}>Intermediate</Heading>
              <Flex flexDir={"column"} gap={3} w={"100%"}>
                {/* Group 1 */}
                <Flex
                  w={"100%"}
                  flexDir={"column"}
                  alignItems={"center"}
                  gap={2}
                >
                  <Text fontWeight={"sm"}>Group 1</Text>
                  <Flex w={"100%"} gap={2} flexDir={"column"}>
                    <NumberInput
                      placeholder="No. Of Attempts (Mandatory)"
                      value={g1Attempts}
                      onChange={setG1Attempts}
                    />
                    <Flex gap={2}>
                      <SelectCustom
                        list={groupMonths}
                        value={g1Month}
                        onChange={setG1Month}
                        placeholder="Month (Mandatory)"
                      />
                      <SelectCustom
                        list={years}
                        value={g1Year}
                        onChange={setG1Year}
                        placeholder="Year (Mandatory)"
                      />
                    </Flex>
                  </Flex>
                </Flex>
                {/* Group 2 */}
                <Flex
                  w={"100%"}
                  flexDir={"column"}
                  alignItems={"center"}
                  gap={2}
                >
                  <Text fontWeight={"sm"}>Group 2</Text>
                  <Flex w={"100%"} gap={2} flexDir={"column"}>
                    <NumberInput
                      placeholder="No. Of Attempts (Mandatory)"
                      value={g2Attempts}
                      onChange={setG2Attempts}
                    />
                    <Flex gap={2}>
                      <SelectCustom
                        list={groupMonths}
                        value={g2Month}
                        onChange={setG2Month}
                        placeholder="Month (Mandatory)"
                      />
                      <SelectCustom
                        list={years}
                        value={g2Year}
                        onChange={setG2Year}
                        placeholder="Year (Mandatory)"
                      />
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
            {/* Scores */}
            <Flex flexDir={"column"} alignItems={"center"} gap={2}>
              <Heading size={"md"}>Scores</Heading>
              <Flex flexDir={"column"} gap={3} w={"100%"}>
                <StringInput
                  placeholder="Scores in 12th"
                  value={score12}
                  onChange={setScore12}
                />
                <StringInput
                  placeholder="Scores in 10th"
                  value={score10}
                  onChange={setScore10}
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
