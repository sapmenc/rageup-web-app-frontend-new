import { EditIcon } from "@chakra-ui/icons";
import CardLayout from "../../../../layouts/CardLayout";
import { Card, Flex, Heading, Text, useDisclosure } from "@chakra-ui/react";
import Edit from "./modals/Edit";

interface EducationProps {
  // eslint-disable-next-line
  data: any;
}
const Education: React.FC<EducationProps> = ({ data }) => {
  console.log(data);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const degree = data?.educations?.degree || "";
  const articleshipStatus = data?.educations?.articleshipStatus || "";
  const month = data?.educations?.month || "";
  const year = data?.educations?.year || "";
  const g1Year = data?.educations?.g1Year || "";
  const g1Month = data?.educations?.g1Month || "";
  const g2Year = data?.educations?.g2Year || "";
  const g2Month = data?.educations?.g2Month || "";
  const g1Attempts =
    data?.educations?.g1Attempts && !isNaN(data?.educations?.g1Attempts)
      ? data?.educations?.g1Attempts
      : 0;
  const g2Attempts =
    data?.educations?.g2Attempts && !isNaN(data?.educations?.g2Attempts)
      ? data?.educations?.g2Attempts
      : 0;

  return (
    <>
      <Edit isOpen={isOpen} onClose={onClose} data={data} />
      <CardLayout
        heading="Education"
        utility={{ label: "", onUtility: onOpen, LeftIcon: <EditIcon /> }}
      >
        <Flex flexDir={"column"} gap={3}>
          {/* Bachelors Degree */}
          <Card backgroundColor={"#FFE4E1"} p={4} gap={2}>
            <Flex justifyContent={"space-between"} alignItems={"center"}>
              <Heading color={"#343434"} size={"xs"}>
                Bachelors Degree
              </Heading>
              <Text color={"#343434"} fontSize={"xs"}>
                {`${month ? month + ", " : ""} ${year}`}
              </Text>
            </Flex>

            <Flex flexDir={"column"}>
              <Text color={"#343434"} fontSize={"xs"} fontWeight={"bold"}>
                {degree}
              </Text>
            </Flex>
          </Card>

          {/* Articleship */}
          <Card backgroundColor={"#FFE4E1"} p={4} gap={2}>
            <Flex justifyContent={"space-between"} alignItems={"center"}>
              <Heading color={"#343434"} size={"xs"}>
                Articleship
              </Heading>
              <Text color={"#FF993C"} fontWeight={"bold"} fontSize={"xs"}>
                {articleshipStatus}
              </Text>
            </Flex>
          </Card>

          {/* Intermediate */}
          <Card backgroundColor={"#FFE4E1"} p={4} gap={2}>
            <Flex gap={2} alignItems={"center"}>
              <Heading color={"#343434"} size={"xs"} display={"inline"}>
                Intermediate
              </Heading>
              <Text
                color={"#1DCD00"}
                fontWeight={"bold"}
                fontSize={"sm"}
                display={"inline"}
              >
                {g1Year && g1Month && g2Year && g2Month ? "Cleared" : ""}
              </Text>
            </Flex>

            <Flex
              gap={{
                base: 2,
                sm: 20,
              }}
              alignItems={{
                base: "start",
                sm: "center",
              }}
              flexDir={{
                base: "column",
                sm: "row",
              }}
            >
              {/* group 1 */}
              <Flex flexDir={"column"} gap={1}>
                <Flex alignItems={"center"} gap={1}>
                  <Text
                    color={"#343434"}
                    fontWeight={"bold"}
                    fontSize={"xs"}
                    display={"inline"}
                  >
                    Group 1:{" "}
                  </Text>
                  <Text color={"#343434"} fontSize={"xs"} display={"inline"}>
                    {`${g1Month ? g1Month + ", " : ""} ${g1Year}`}
                  </Text>
                </Flex>
                <Text color={"#343434"} fontSize={"xs"} display={"inline"}>
                  {`${g1Attempts} ${g1Attempts > 1 ? "Attempts" : "Attempt"}`}
                </Text>
              </Flex>

              {/* group 2 */}
              <Flex flexDir={"column"} gap={1}>
                <Flex alignItems={"center"} gap={1}>
                  <Text
                    color={"#343434"}
                    fontWeight={"bold"}
                    fontSize={"xs"}
                    display={"inline"}
                  >
                    Group 2:{" "}
                  </Text>
                  <Text color={"#343434"} fontSize={"xs"} display={"inline"}>
                    {`${g2Month ? g2Month + ", " : ""} ${g2Year}`}
                  </Text>
                </Flex>
                <Text color={"#343434"} fontSize={"xs"} display={"inline"}>
                  {`${g2Attempts} ${g2Attempts > 1 ? "Attempts" : "Attempt"}`}
                </Text>
              </Flex>
            </Flex>
          </Card>

          {/* Scores in 12th */}
          <Card backgroundColor={"#FFE4E1"} p={4} gap={2}>
            <Flex justifyContent={"space-between"} alignItems={"center"}>
              <Heading color={"#343434"} size={"xs"}>
                Scores in 12th
              </Heading>
              <Text color={"#343434"} fontWeight={"bold"} fontSize={"xs"}>
                {data?.educations?.score12 || ""}
              </Text>
            </Flex>
          </Card>

          {/* Scores in 10th */}
          <Card backgroundColor={"#FFE4E1"} p={4} gap={2}>
            <Flex justifyContent={"space-between"} alignItems={"center"}>
              <Heading color={"#343434"} size={"xs"}>
                Scores in 10th
              </Heading>
              <Text color={"#343434"} fontWeight={"bold"} fontSize={"xs"}>
                {data?.educations?.score10 || ""}
              </Text>
            </Flex>
          </Card>
        </Flex>
      </CardLayout>
    </>
  );
};

export default Education;
