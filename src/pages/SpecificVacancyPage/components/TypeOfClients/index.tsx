import CardLayout from "../../../../layouts/CardLayout";
import { Flex, Text } from "@chakra-ui/react";

interface TypeOfClientsProps {
  types: string[];
}
const TypeOfClients: React.FC<TypeOfClientsProps> = ({ types }) => {
  return (
    <CardLayout heading="Type of Clients">
      <Flex justifyContent={"space-between"}>
        <Text>Top 3</Text>
        <Flex flexDir={"column"} gap={2}>
          {types.map((t, key) => {
            return <Text key={key}>{t}</Text>;
          })}
        </Flex>
      </Flex>
    </CardLayout>
  );
};

export default TypeOfClients;
