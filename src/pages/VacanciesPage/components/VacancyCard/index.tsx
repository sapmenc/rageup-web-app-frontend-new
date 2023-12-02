import { Card, Flex, Heading, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { RAGE_UP_LIGHT_RED } from "../../../../foundations/colors";
import formatDate from "../../../../helpers/formatDate";

interface VacancyCardProps {
  // eslint-disable-next-line
  data: any;
}
const VacancyCard: React.FC<VacancyCardProps> = ({ data }) => {
  const navigate = useNavigate();
  if (!data._id) {
    return null;
  }
  return (
    <Card
      p={4}
      display={"flex"}
      flexDir={"column"}
      gap={2}
      cursor={"pointer"}
      onClick={() => {
        navigate(`/vacancies/${data._id}`);
      }}
      _hover={{
        backgroundColor: RAGE_UP_LIGHT_RED,
        transitionDuration: "0.2s",
      }}
    >
      <Flex alignItems={"center"} justifyContent={"space-between"}>
        <Heading size={"sm"}>{data?.firmName}</Heading>
        {/* <Box
          cursor={"pointer"}
          onClick={(e) => {
            e.stopPropagation();
            setIsSaved((prev) => !prev);
          }}
        >
          {isSaved ? <BsFillBookmarkFill color={"#f4b718"} /> : <BsBookmark />}
        </Box> */}
      </Flex>
      <Flex flexDir={"column"} gap={1}>
        <Text color={"#343434"} fontSize={"sm"}>
          {data?.department}
        </Text>
        <Text color={"#343434"} fontSize={"xs"}>
          {data?.location}
        </Text>
      </Flex>

      <Text color={"#343434"} fontSize={"xx-small"}>
        {`Posted on ${formatDate(data?.createdAt)}`}
      </Text>
    </Card>
  );
};

export default VacancyCard;
