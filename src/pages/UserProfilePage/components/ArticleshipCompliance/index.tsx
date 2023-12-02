import { EditIcon } from "@chakra-ui/icons";
import CardLayout from "../../../../layouts/CardLayout";
import { Card, Flex, Heading, Text, useDisclosure } from "@chakra-ui/react";
import Edit from "./modals/Edit";
interface ArticleshipComplianceProps {
  // eslint-disable-next-line
  data: any;
}
const ArticleshipCompliance: React.FC<ArticleshipComplianceProps> = ({
  data,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const orientationCourse =
    data?.articleshipCompliance?.orientationCourse || "";
  const itt = data?.articleshipCompliance?.itt || "";
  const expectedJoiningDate =
    data?.articleshipCompliance?.expectedJoiningDate || "";
  return (
    <>
      <Edit isOpen={isOpen} onClose={onClose} data={data} />
      <CardLayout
        heading="Articleship Compliance"
        utility={{ label: "", onUtility: onOpen, LeftIcon: <EditIcon /> }}
      >
        <Flex flexDir={"column"} gap={3}>
          {/* Orientation Course */}
          <Card backgroundColor={"#FFE4E1"} p={4} gap={2}>
            <Flex justifyContent={"space-between"} alignItems={"center"}>
              <Heading color={"#343434"} size={"xs"}>
                Orientation Course
              </Heading>
              <Text color={"#343434"} fontWeight={"bold"} fontSize={"xs"}>
                {orientationCourse}
              </Text>
            </Flex>
          </Card>

          {/* ITT */}
          <Card backgroundColor={"#FFE4E1"} p={4} gap={2}>
            <Flex justifyContent={"space-between"} alignItems={"center"}>
              <Heading color={"#343434"} size={"xs"}>
                ITT
              </Heading>
              <Text color={"#343434"} fontWeight={"bold"} fontSize={"xs"}>
                {itt}
              </Text>
            </Flex>
          </Card>

          {/* Expected Joining Date */}
          <Card backgroundColor={"#FFE4E1"} p={4} gap={2}>
            <Flex justifyContent={"space-between"} alignItems={"center"}>
              <Heading color={"#343434"} size={"xs"}>
                Expected Joining Date
              </Heading>
              <Text color={"#343434"} fontWeight={"bold"} fontSize={"xs"}>
                {expectedJoiningDate}
              </Text>
            </Flex>
          </Card>
        </Flex>
      </CardLayout>
    </>
  );
};

export default ArticleshipCompliance;
