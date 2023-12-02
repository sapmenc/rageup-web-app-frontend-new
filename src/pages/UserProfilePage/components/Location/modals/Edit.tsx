import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Flex,
  Select,
  useToast,
} from "@chakra-ui/react";
import { withCookies } from "react-cookie";
import locations from "../utils/locations";
import React, { useState } from "react";
import rageupInputProps from "../../../../../helpers/rageupInputProps";
import { updateUserProfile } from "../../../../../api/user";

interface EditProps {
  isOpen: boolean;
  onClose: () => void;
  // eslint-disable-next-line
  cookies: any;
  // eslint-disable-next-line
  data: any;
}
type PreferredLocations = [string | null, string | null, string | null];
const Edit: React.FC<EditProps> = ({ isOpen, onClose, cookies, data }) => {
  const toast = useToast();
  const userId = cookies.get("user")?._id;
  const token = cookies.get("authToken");
  const originalPreferredLocations: PreferredLocations =
    (data?.preferredLocations as PreferredLocations) || [null, null, null];
  const [preferredLocations, setPreferedLocations] =
    useState<PreferredLocations>([...originalPreferredLocations]);

  const handleSave = () => {
    const body = {
      preferredLocations,
    };
    if (!preferredLocations[0]) {
      toast({
        title: "Preferred Location 1 is Mandatory!",
        position: "top",
        status: "error",
        duration: 1000,
        isClosable: true,
        variant: "subtle",
      });
      return;
    }
    updateUserProfile(userId, body, token)
      .then(function () {
        toast({
          title: "User data updated successfully",
          position: "top",
          status: "success",
          duration: 1000,
          isClosable: true,
          variant: "subtle",
        });
        onClose();
      })
      .catch(function (error) {
        toast({
          title: "Error in user data updation",
          position: "top",
          status: "success",
          duration: 1000,
          isClosable: true,
          variant: "subtle",
        });
        console.log("Error in user data fetch:", error);
        onClose();
      })
      .finally(() => {
        window.location.reload();
      });
  };
  const findLeftOut = (A: string[], B: PreferredLocations): string[] => {
    // give A - (A ∩ B)
    const res = A.filter((a) => !B.includes(a));
    return res;
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent rounded={"2xl"}>
        <ModalHeader></ModalHeader>
        <ModalCloseButton />
        <ModalBody py={6}>
          <Flex flexDir={"column"} gap={4}>
            {[0, 1, 2].map((index, key) => {
              return (
                <React.Fragment key={key}>
                  <Select
                    placeholder={`Preferred Location ${index + 1}`}
                    color={!preferredLocations[index] ? "#9ca3af" : "black"}
                    // eslint-disable-next-line
                    // @ts-ignore
                    value={
                      preferredLocations[index] ? preferredLocations[index] : ""
                    }
                    onChange={(e) => {
                      const value = e.target.value;
                      setPreferedLocations((prev: PreferredLocations) => {
                        const newArray: PreferredLocations = [...prev];
                        newArray[index] = value ? value : null;
                        return newArray;
                      });
                    }}
                    {...rageupInputProps}
                  >
                    {preferredLocations[index] && (
                      // eslint-disable-next-line
                      // @ts-ignore
                      <option value={preferredLocations[index]}>
                        {preferredLocations[index]}
                      </option>
                    )}
                    {findLeftOut(locations, preferredLocations).map(
                      (location) => {
                        return <option value={location}>{location}</option>;
                      }
                    )}
                  </Select>
                </React.Fragment>
              );
            })}
          </Flex>
        </ModalBody>

        <ModalFooter justifyContent={"center"}>
          <Button
            px={8}
            w={"sm"}
            color={"white"}
            bgColor={"#33a854"}
            _hover={{
              bgColor: "rgba(51,130,84)",
            }}
            rounded={"full"}
            onClick={handleSave}
          >
            Save Details
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default withCookies(Edit);
