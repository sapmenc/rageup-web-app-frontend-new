import { ChevronRightIcon, LockIcon } from "@chakra-ui/icons";
import { Card, Flex, Heading, Tooltip } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import CollapsableText from "../../../../../components/CollapsableText";

interface SubjectCardProps {
  isPurchased: boolean;
  courseId: string;
  subjectId: string;
}
const SubjectCard: React.FC<SubjectCardProps> = ({
  isPurchased,
  courseId,
  subjectId,
}) => {
  const navigate = useNavigate();
  return (
    <Card
      display={"flex"}
      flexDir={"column"}
      gap={2}
      cursor={"pointer"}
      onClick={() => {
        if (isPurchased) {
          navigate(`/learnings/${courseId}/${subjectId}`);
        }
      }}
      w={"full"}
      rounded={"xl"}
      overflow={"hidden"}
      className="course-card"
      backgroundColor={!isPurchased ? "gray.100" : "white"}
    >
      <Flex flexDir={"column"} p={4} gap={2}>
        {/* Title + icon*/}
        <Flex justifyContent={"space-between"} gap={5}>
          <Heading fontSize={"lg"} noOfLines={2}>
            Introduction
          </Heading>
          <Flex gap={1} alignItems={"center"}>
            {/* lock button */}
            {!isPurchased && (
              <Tooltip label="Content Locked.">
                <Flex
                  p={1.5}
                  backgroundColor={"#1b2333"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  rounded={"md"}
                >
                  <LockIcon boxSize={3} color={"#FFD700"} />
                </Flex>
              </Tooltip>
            )}

            <ChevronRightIcon boxSize={5} />
          </Flex>
        </Flex>
        {/* description */}
        <CollapsableText>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae commodi
          molestiae animi fuga odit quisquam repudiandae deleniti id, dicta
          voluptas, beatae, earum impedit tenetur quaerat aliquid ipsa.
          Inventore, consectetur recusandae. Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Itaque fugiat suscipit praesentium
          reiciendis ipsum, tempora dolore alias cum dolorum laudantium.
        </CollapsableText>
      </Flex>
    </Card>
  );
};

export default SubjectCard;