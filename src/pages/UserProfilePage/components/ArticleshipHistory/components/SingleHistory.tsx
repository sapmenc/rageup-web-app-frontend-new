import { Card, Flex, Heading, Text } from "@chakra-ui/react";
import { useState } from "react";

interface SingleHistoryProps {
  // eslint-disable-next-line
  history: any;
}
const SingleHistory: React.FC<SingleHistoryProps> = ({ history }) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const description = history?.description;

  return (
    <Card backgroundColor={"#FFE4E1"} p={4} gap={5}>
      <Flex flexDir={"column"} gap={1}>
        <Flex justifyContent={"space-between"}>
          <Text color={"#343434"} fontSize={"xs"}>
            Start date
          </Text>
          <Text color={"#343434"} fontSize={"xs"}>
            {history?.startDate}
          </Text>
        </Flex>

        <Heading color={"#343434"} size={"xs"}>
          {history?.firmName}
        </Heading>

        <Flex justifyContent={"space-between"}>
          <Text color={"#343434"} fontSize={"xs"}>
            {history?.department}
          </Text>
          <Text color={"#343434"} fontSize={"xs"}>
            {history?.articleScheme}
          </Text>
        </Flex>
        <Text color={"#343434"} fontSize={"xs"}>
          {history?.location}
        </Text>
      </Flex>

      <Text color={"#343434"} fontSize={"xs"} noOfLines={isExpanded ? 0 : 3}>
        {description}
      </Text>
      {description.length > 200 && (
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
      )}
    </Card>
  );
};

export default SingleHistory;
