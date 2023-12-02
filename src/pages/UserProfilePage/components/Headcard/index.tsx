import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  IconButton,
  Text,
} from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";
import { RAGE_UP_RED, RAGE_UP_RED_HOVER } from "../../../../foundations/colors";
import Edit from "./modals/Edit";
import { useState } from "react";

interface HeadcardProps {
  // eslint-disable-next-line
  data: any;
}
const Headcard: React.FC<HeadcardProps> = ({ data }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  console.log("profilePicture", data.profilePicture);
  return (
    <>
      {isOpen && (
        <Edit
          data={data}
          isOpen={isOpen}
          onClose={() => {
            setIsOpen(false);
          }}
        />
      )}
      <Card
        height={"100%"}
        width={"100%"}
        backgroundColor={"white"}
        justifyContent={"space-between"}
        border={"1px solid #00000014"}
        px={3}
        // maxH={"580px"}
      >
        <Flex direction={"column"} height={"100%"} py={2}>
          <Avatar size={"lg"} src={data?.profilePicture} />
          <Flex justifyContent={"space-between"} alignItems={"center"} px={2}>
            {/* HEADER */}
            <CardHeader pl={0}>
              <Heading fontWeight={"semibold"} fontSize={"18px"}>
                {data?.name || ""}
              </Heading>
            </CardHeader>

            <IconButton
              isRound={true}
              variant="solid"
              aria-label="Done"
              fontSize="16px"
              backgroundColor={"white"}
              shadow={"lg"}
              icon={<EditIcon />}
              _hover={{
                backgroundColor: "#f6f6f6",
              }}
              onClick={() => {
                setIsOpen(true);
              }}
            />
          </Flex>

          {/* BODY */}
          <CardBody padding={2} paddingBottom={4}>
            {data?.headline && (
              <Text color={"#343434"} fontSize={"sm"}>
                {data?.headline || ""}
              </Text>
            )}

            <Flex flexDir={"column"} gap={2}>
              <Flex justifyContent={"space-between"} alignItems={"center"}>
                <Text color={"#343434"} fontSize={"xs"}>
                  {`${data.city ? `${data.city},` : ""} ${
                    data.state ? `${data.state},` : ""
                  } India`}
                </Text>
                {data?.srn && (
                  <Flex flexDir={"column"} alignItems={"center"}>
                    <Text color={"#343434"} fontSize={"xs"}>
                      SRN Number
                    </Text>
                    <Text color={"#343434"} fontSize={"xs"} fontWeight={"bold"}>
                      {data?.srn || ""}
                    </Text>
                  </Flex>
                )}
              </Flex>

              <Flex justifyContent={"space-between"} alignItems={"center"}>
                <Button
                  alignSelf={"center"}
                  backgroundColor={RAGE_UP_RED}
                  color={"white"}
                  _hover={{ backgroundColor: RAGE_UP_RED_HOVER }}
                  minW={32}
                  mr={3}
                  rounded={"full"}
                  size={"sm"}
                >
                  Download Resume
                </Button>
                <Flex flexDir={"column"} alignItems={"center"}>
                  <Text color={"#343434"} fontSize={"xs"}>
                    Rageup Score
                  </Text>
                  <Text color={"#27CC18"} fontSize={"xs"} fontWeight={"bold"}>
                    {data?.rageupScore || 0}/10
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          </CardBody>
        </Flex>
      </Card>
    </>
  );
};

export default Headcard;
