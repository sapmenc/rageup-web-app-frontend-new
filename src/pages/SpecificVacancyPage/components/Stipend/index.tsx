import { Flex, Text } from "@chakra-ui/react";
import CardLayout from "../../../../layouts/CardLayout";

interface StipendProps {
  stipend1: string;
  stipend2: string;
}
const Stipend: React.FC<StipendProps> = ({ stipend1, stipend2 }) => {
  return (
    <CardLayout heading="Stipend">
      <Flex flexDir={"column"} gap={2}>
        <Flex justifyContent={"space-between"}>
          <Text>1st Year</Text>
          <Text>{`₹ ${stipend1}`}</Text>
        </Flex>
        <Flex justifyContent={"space-between"}>
          <Text>2nd Year</Text>
          <Text>{`₹ ${stipend2}`}</Text>
        </Flex>
      </Flex>
    </CardLayout>
  );
};

export default Stipend;
