import { CopyIcon } from "@chakra-ui/icons";
import { Divider, Flex, IconButton, Text, useToast } from "@chakra-ui/react";
import { RAGE_UP_RED } from "../../../../foundations/colors";
import { useEffect, useState } from "react";
import { getMentorById } from "../../../../api/mentor";


interface SessionCardProps {
  mentorId: any;
  slot: any;
}

const SessionCard: React.FC<SessionCardProps>  = ({
  mentorId,
  slot,
}) => {
  const [mentor,setMentor] = useState<any>(null)
  useEffect(()=>{
    getMentorById(mentorId).then(function(res){
      setMentor(res.data.data);
    }).catch(function(error){
      console.log("Error in Fetching mentor by id: ", error);
    })
  },[])
  const toast = useToast();
  const isDisabled: boolean = false;
  return (
    <Flex
      color={isDisabled ? "gray.500" : "white"}
      flexDir={"column"}
      minW={"md"}
      width={'80%'}
      p={2}
      backgroundColor={RAGE_UP_RED}
      rounded={"2xl"}
      fontWeight={"semibold"}
    >
      <Flex w={"100%"} alignItems={"center"} p={2} gap={2}>
        <Text w={"100%"}>{mentor?.mentorName}</Text>
        <Text textAlign={"center"} w={"100%"}>
          {slot.slice(0,10)}
        </Text>
        <Text textAlign={"end"} w={"100%"}>
          {slot.slice(11)}
        </Text>
      </Flex>
      <Divider />
      <Flex alignItems={"center"} p={2}>
        <Text w={"100%"}>{mentor?.videoUrl}</Text>

        <IconButton
          aria-label="copy-btn"
          icon={<CopyIcon />}
          backgroundColor={"transparent"}
          isDisabled={isDisabled}
          color={isDisabled ? "gray.500" : "white"}
          _hover={{
            backgroundColor: "rgba(0,0,0,0.1)",
          }}
          onClick={() => {
            toast({
              title: "Link Copied",
              position: "top",
              status: "success",
              duration: 1000,
              isClosable: true,
              variant: "subtle",
            });
          }}
        />
      </Flex>
    </Flex>
  );
};

export default SessionCard;
