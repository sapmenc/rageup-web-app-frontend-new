import { Flex, Heading, Text } from "@chakra-ui/react";

interface MoreInfoProps {
  info: string;
}
const MoreInfo: React.FC<MoreInfoProps> = ({ info }) => {
  return (
    <Flex flexDir={"column"} px={4} gap={4} mt={5}>
      <Heading fontWeight={"semibold"} fontSize={"18px"}>
        More Info
      </Heading>
      <Text>{info}</Text>
    </Flex>
  );
};

export default MoreInfo;
