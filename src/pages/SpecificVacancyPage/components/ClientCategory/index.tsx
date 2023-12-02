import { Flex, Text } from "@chakra-ui/react";
import CardLayout from "../../../../layouts/CardLayout";

interface ClientCategoryProps {
  categories: string[];
}
const ClientCategory: React.FC<ClientCategoryProps> = ({ categories }) => {
  return (
    <CardLayout heading="Client Category">
      <Flex justifyContent={"space-between"}>
        <Text>Top 3</Text>
        <Flex flexDir={"column"} gap={2}>
          {categories.map((c, key) => {
            return <Text key={key}>{c}</Text>;
          })}
        </Flex>
      </Flex>
    </CardLayout>
  );
};

export default ClientCategory;
