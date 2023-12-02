import { EditIcon } from "@chakra-ui/icons";
import CardLayout from "../../../../layouts/CardLayout";
import { Card, Flex, Heading, Text } from "@chakra-ui/react";
import Edit from "./modals/Edit";
import { useState } from "react";

interface LocationProps {
  // eslint-disable-next-line
  data: any;
}
const Location: React.FC<LocationProps> = ({ data }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const preferredLocation = data?.preferredLocations || [];
  return (
    <>
      {isOpen && (
        <Edit
          data={data}
          isOpen={isOpen}
          onClose={() => {
            setIsOpen(false);
          }}
        />
      )}
      <CardLayout
        heading="Location"
        utility={{
          label: "",
          onUtility: () => {
            setIsOpen(true);
          },
          LeftIcon: <EditIcon />,
        }}
      >
        {data?.preferredLocations && (
          <Flex flexDir={"column"}>
            <Card backgroundColor={"#FFE4E1"} p={4} gap={2}>
              <Heading color={"#343434"} size={"xs"}>
                Preferred
              </Heading>
              <Flex flexDir={"column"} alignItems={"end"}>
                {preferredLocation.map((l: string, key: number) => {
                  return (
                    <Text key={key} color={"#343434"} fontSize={"xs"}>
                      {l}
                    </Text>
                  );
                })}
              </Flex>
            </Card>
          </Flex>
        )}
      </CardLayout>
    </>
  );
};

export default Location;
