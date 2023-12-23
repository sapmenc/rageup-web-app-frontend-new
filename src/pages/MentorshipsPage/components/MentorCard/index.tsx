import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Card,
  CardHeader,
  CardFooter,
  Flex,
  Box,
  Heading,
  Image,
  UnorderedList,
  ListItem,
  CardBody,
} from "@chakra-ui/react";
import { IoMdTrophy } from "react-icons/io";
import { useNavigate } from "react-router-dom";

interface MentorCardProps {
  mentorName: string;
  image: string;
  strengths: [string, string?];
  mentorId: any;
}
const MentorCard: React.FC<MentorCardProps> = ({
  mentorName,
  image,
  strengths,
  mentorId,
}) => {
  // console.log("mentor id", mentorId);
  const navigate = useNavigate();
  return (
    <Card maxW="md"
    cursor={"pointer"}      
    onClick={() => {
      navigate(`/mentorships/mentor/${mentorId}`);
    }}
    >
      <CardHeader
      >
        <Flex gap="4" alignItems={"center"} w={"100%"}>
          <Flex flex="1" gap={4} alignItems="center" flexWrap="wrap" w={"100%"}>
            <Heading size="md">{mentorName}</Heading>
          </Flex>
          <ArrowForwardIcon />
        </Flex>
      </CardHeader>

      <CardBody>
        <Image
          objectFit="cover"
          src={image}
          alt="Chakra UI"
          borderRadius={"xl"}
        />
      </CardBody>

      <CardFooter
        justify="space-between"
        flexWrap="wrap"
        sx={{
          "& > button": {
            minW: "136px",
          },
        }}
      >
        <Flex w={"100%"} alignItems={"center"} gap={5}>
          <Box boxSize={8} flexBasis={14}>
            <IoMdTrophy className={"trophy-icon"} />
          </Box>
          <UnorderedList>
            {strengths.map((strength) => {
              return (
                <ListItem fontSize={"lg"} fontWeight={"semibold"}>
                  {strength}
                </ListItem>
              );
            })}
          </UnorderedList>
        </Flex>
      </CardFooter>
    </Card>
  );
};

export default MentorCard;
