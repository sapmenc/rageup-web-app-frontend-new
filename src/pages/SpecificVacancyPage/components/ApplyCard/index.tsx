import React, { useState } from "react";
import CardLayout from "../../../../layouts/CardLayout";
import {
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { RAGE_UP_RED, RAGE_UP_RED_HOVER } from "../../../../foundations/colors";

interface ApplyCardProps {
  // eslint-disable-next-line
  data: any;
}
const onStartTest = () => {
  console.log("test started");
  // applied at the end
  onApply();
};
const onApply = () => {
  console.log("applied");
};
const ApplyCard: React.FC<ApplyCardProps> = ({ data }) => {
  const isTestAssigned = data.isTestAssigned as boolean;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      {isTestAssigned && isOpen && (
        <Modal
          isOpen={isOpen}
          onClose={() => {
            setIsOpen(false);
          }}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Vacancy Test</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              You need to give a test to apply to this vacancy.
            </ModalBody>

            <ModalFooter>
              <Button
                ml={"auto"}
                alignSelf={"center"}
                shadow={"xl"}
                w={"full"}
                maxW={{
                  base: "none",
                  sm: "48",
                }}
                size={"md"}
                rounded={"full"}
                fontSize={"lg"}
                backgroundColor={RAGE_UP_RED}
                color={"white"}
                _hover={{ backgroundColor: RAGE_UP_RED_HOVER }}
                onClick={() => {
                  setIsOpen(false);
                  onStartTest();
                }}
              >
                Start Test
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
      <CardLayout heading="Taxation">
        <Flex
          flexDir={{
            base: "column",
            sm: "row",
          }}
          gap={{
            base: 5,
            sm: 2,
          }}
        >
          <Flex flexDir={"column"} w={"100%"} gap={2}>
            <Text> Kothrud, Pune</Text>
            <Text>32 Applicants</Text>
            <Text>2 days ago</Text>
          </Flex>
          {/* Apply button */}
          <Flex
            w={"full"}
            flexDirection={"column"}
            alignItems={"flex-end"}
            justifyContent={"end"}
          >
            <Button
              ml={"auto"}
              alignSelf={"center"}
              shadow={"xl"}
              w={"full"}
              maxW={{
                base: "none",
                sm: "48",
              }}
              size={"md"}
              rounded={"full"}
              fontSize={"lg"}
              backgroundColor={RAGE_UP_RED}
              color={"white"}
              _hover={{ backgroundColor: RAGE_UP_RED_HOVER }}
              onClick={() => {
                if (isTestAssigned) {
                  setIsOpen(true);
                } else {
                  onApply();
                }
              }}
            >
              Apply
            </Button>
          </Flex>
        </Flex>
      </CardLayout>
    </>
  );
};

export default ApplyCard;
