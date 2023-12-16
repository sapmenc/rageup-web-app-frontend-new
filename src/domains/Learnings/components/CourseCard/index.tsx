import { Box, Card, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { RAGE_UP_LIGHT_RED } from "../../../../foundations/colors";
import formatDate from "../../../../helpers/formatDate";
import { ChevronRightIcon } from "@chakra-ui/icons";

interface CourseCardProps {
  // eslint-disable-next-line
  data: any;
}
const CourseCard: React.FC<CourseCardProps> = ({ data }) => {
  const id = data?._id;
  const name = data?.name || "name not found";
  const img =
    "data:image/jpeg;base64,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";
  const navigate = useNavigate();
  // if (!data._id) {
  //   return null;
  // }
  return (
    <Card
      display={"flex"}
      flexDir={"column"}
      gap={2}
      cursor={"pointer"}
      onClick={() => {
        navigate(`/learnings/${id}`);
      }}
      w={"full"}
      maxW={"400px"}
      rounded={"xl"}
      overflow={"hidden"}
      className="course-card"
    >
      {/* Image */}
      <Box
        className="course-card-img"
        width={"full"}
        aspectRatio={4 / 2}
        backgroundColor={"red.100"}
        roundedBottom={"xl"}
        transitionDuration={"200ms"}
      >
        {img && (
          <Image
            src={img}
            alt="course logo"
            w={"full"}
            h={"full"}
            objectFit={"cover"}
          />
        )}
      </Box>

      {/* Info */}
      <Flex flexDir={"column"} p={4} gap={2}>
        {/* Title */}
        <Heading fontSize={"lg"} noOfLines={2}>
          {name}
        </Heading>

        {/* navigate button */}
        <Flex justifyContent={"flex-end"}>
          <ChevronRightIcon boxSize={5} />
        </Flex>
      </Flex>
    </Card>
  );
};

export default CourseCard;
