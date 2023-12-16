import PageLayout from "../../layouts/PageLayout";
import FieldCheckLayout from "../../layouts/FieldCheckLayout";
import { Flex } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const RageupTestPage = () => {
  const { id } = useParams();
  console.log("test id", id);
  return (
    <PageLayout>
      <FieldCheckLayout>
        <Flex justifyContent={"center"}>
          <Flex
            flexDirection={"column"}
            py={2}
            px={4}
            gap={4}
            w={"full"}
            maxW={"2xl"}
          >
            rageup test
          </Flex>
        </Flex>
      </FieldCheckLayout>
    </PageLayout>
  );
};

export default RageupTestPage;
