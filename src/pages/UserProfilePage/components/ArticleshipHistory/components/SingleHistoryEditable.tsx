import { EditIcon } from "@chakra-ui/icons";
import { Card, Flex, Heading, IconButton, Text } from "@chakra-ui/react";
import { useState } from "react";
import EditSingle from "../modals/EditSingle";

interface SingleHistoryEditableProps {
  // eslint-disable-next-line
  history: any;
}
const SingleHistoryEditable: React.FC<SingleHistoryEditableProps> = ({
  history,
}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const description = history?.description;
  return (
    <>
      {isOpen && (
        <EditSingle
          history={history}
          isOpen={isOpen}
          onClose={() => {
            setIsOpen(false);
          }}
        />
      )}
      <Card backgroundColor={"#FFE4E1"} p={4} gap={5}>
        <Flex flexDir={"column"} gap={1}>
          <Flex justifyContent={"end"}>
            <IconButton
              variant="solid"
              aria-label="Done"
              fontSize="16px"
              backgroundColor={"transparent"}
              icon={<EditIcon />}
              _hover={{
                backgroundColor: "rgba(0,0,0,0.1)",
              }}
              onClick={() => {
                setIsOpen(true);
              }}
            />
          </Flex>
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
    </>
  );
};

export default SingleHistoryEditable;
