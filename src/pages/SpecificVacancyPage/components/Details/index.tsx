import CardLayout from "../../../../layouts/CardLayout";
import { Box, Flex, Text, Link } from "@chakra-ui/react";

interface DetailsProps {
  workingDays: string;
  noticePeriod: string;
  websiteLink: string;
  noOfEmployees: string;
}
const Details: React.FC<DetailsProps> = ({
  workingDays,
  noticePeriod,
  websiteLink,
  noOfEmployees,
}) => {
  return (
    <CardLayout>
      <Box py={2}>
        <Flex flexDir={"column"} gap={4}>
          {/* Working Days */}
          <Flex gap={1}>
            <Text fontWeight={"bold"}>Working Days:</Text>
            <Text>{workingDays}</Text>
          </Flex>

          {/* Notice Period */}
          <Flex gap={1}>
            <Text fontWeight={"bold"}>Notice Period:</Text>
            <Text>{noticePeriod}</Text>
          </Flex>

          {/* Website Link */}
          <Flex gap={1}>
            <Text fontWeight={"bold"}>Website Link:</Text>
            <Text color={"#005AAD"} textDecoration={"underline"}>
              <Link href={websiteLink} target="_blank">
                {websiteLink}
              </Link>
            </Text>
          </Flex>

          {/* No. of Employees */}
          <Flex gap={1}>
            <Text fontWeight={"bold"}>No. of Employees:</Text>
            <Text>{noOfEmployees}</Text>
          </Flex>
        </Flex>
      </Box>
    </CardLayout>
  );
};

export default Details;
