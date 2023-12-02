import React, { useState } from "react";
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
  Text,
  useToast,
} from "@chakra-ui/react";
import StringInput from "../../../../../components/inputs/StringInput";
import rageupInputProps from "../../../../../helpers/rageupInputProps";
import departments from "../utils/departments";
import DateCustom from "../../../../../components/inputs/DateCustom";
import SelectCustom from "../../../../../components/inputs/SelectCustom";
import StringTextArea from "../../../../../components/inputs/StringTextArea";
import schemes from "../utils/schemes";
import firmRatings from "../utils/firmRating";
import { updateArticleshipHistory } from "../../../../../api/articleshipHistory";
import { withCookies } from "react-cookie";
import DeleteModal from "./Delete";
interface EditSingleProps {
  isOpen: boolean;
  onClose: () => void;
  // eslint-disable-next-line
  history: any;
  // eslint-disable-next-line
  cookies: any;
}

const EditSingle: React.FC<EditSingleProps> = ({
  isOpen,
  onClose,
  history,
  cookies,
}) => {
  const toast = useToast();

  console.log("history", history);
  const [isDeleteOpen, setIsDeleteOpen] = useState<boolean>(false);
  const [firmName, setFirmName] = useState<string | null>(
    history ? history.firmName : null
  );
  const [department, setDepartment] = useState<string | null>(
    history ? history.department : null
  );
  const [subDepartment, setSubDepartment] = useState<string | null>(
    history ? history.subDepartment : null
  );
  const [startDate, setStartDate] = useState<string | null>(
    history ? history.startDate : null
  );
  const [completionDate, setCompletionDate] = useState<string | null>(
    history ? history.completionDate : null
  );
  const [scheme, setScheme] = useState<string | null>(
    history ? history.articleScheme : null
  );
  const [location, setLocation] = useState<string | null>(
    history ? history.location : null
  );
  const [description, setDescription] = useState<string | null>(
    history ? history.description : null
  );
  const [firmRating, setFirmRating] = useState<string | null>(
    history ? history.firmRating : null
  );
  const token = cookies.get("authToken");

  const handleSave = () => {
    if (!firmName) {
      toast({
        title: "Firm Name required",
        position: "top-right",
        description: "",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    if (!department) {
      toast({
        title: "Department required",
        position: "top-right",
        description: "",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    if (!startDate) {
      toast({
        title: "Start Date required",
        position: "top-right",
        description: "",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    if (!completionDate) {
      toast({
        title: "Completion Date required",
        position: "top-right",
        description: "",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    if (!scheme) {
      toast({
        title: "Scheme required",
        position: "top-right",
        description: "",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    if (!location) {
      toast({
        title: "Location required",
        position: "top-right",
        description: "",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    if (!description) {
      toast({
        title: "Description required",
        position: "top-right",
        description: "",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    if (!firmRating) {
      toast({
        title: "Firm Rating required",
        position: "top-right",
        description: "",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    const body = {
      startDate,
      firmName,
      department,
      subDepartment,
      firmRating,
      articleScheme: scheme,
      location,
      completionDate,
      description,
    };
    console.log(body);
    updateArticleshipHistory(history._id, body, token)
      .then(function () {
        toast({
          title: "Articleship history updated successfully",
          position: "top",
          status: "success",
          duration: 1000,
          isClosable: true,
          variant: "subtle",
        });
        onClose();
        window.location.reload();
      })
      .catch(function (error) {
        toast({
          title: "Error in Articleship history updation",
          position: "top",
          status: "error",
          duration: 1000,
          isClosable: true,
          variant: "subtle",
        });
        console.log("Error in user data fetch:", error);
        onClose();
      });
  };
  return (
    <>
      {isDeleteOpen && (
        <DeleteModal
          token={token}
          historyId={history._id}
          isOpen={isDeleteOpen}
          onClose={() => {
            setIsDeleteOpen(false);
          }}
        />
      )}
      <Modal isOpen={isOpen} onClose={onClose} size={"3xl"}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Articleship History</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex flexDir={"column"} gap={4}>
              {/* Firm Name */}
              <StringInput
                value={firmName}
                onChange={setFirmName}
                placeholder="Firm Name"
              />
              {/* deparment + location + subDepartment */}
              <Flex gap={4}>
                {/* department */}
                <Select
                  w={"sm"}
                  placeholder="Department"
                  color={!department ? "gray.500" : "black"}
                  value={department ? department : ""}
                  onChange={(e) => {
                    const d = e.target.value;
                    if (!d) {
                      setDepartment(null);
                      setSubDepartment(null);
                    } else {
                      setDepartment(d);
                      setSubDepartment(null);
                    }
                  }}
                  {...rageupInputProps}
                >
                  {Object.keys(departments).map((d, index) => {
                    return (
                      <option key={index} value={d}>
                        {d}
                      </option>
                    );
                  })}
                </Select>
                {department && departments[department].length > 0 && (
                  <Select
                    color={!subDepartment ? "gray.500" : "black"}
                    w={"sm"}
                    placeholder="Sub-Department"
                    value={subDepartment ? subDepartment : ""}
                    onChange={(e) => {
                      const sd = e.target.value;
                      if (!sd) {
                        setSubDepartment(null);
                      } else {
                        setSubDepartment(sd);
                      }
                    }}
                    {...rageupInputProps}
                  >
                    {departments[department].map((sd, key) => {
                      return (
                        <option key={key} value={sd}>
                          {sd}
                        </option>
                      );
                    })}
                  </Select>
                )}
              </Flex>
              {/* Start Date */}
              <Flex alignItems={"center"} gap={2}>
                <Text width={"fit-content"} whiteSpace={"nowrap"}>
                  Start Date
                </Text>
                <DateCustom value={startDate} onChange={setStartDate} />
              </Flex>
              {/* Completion Date */}
              <Flex alignItems={"center"} gap={2}>
                <Text width={"fit-content"} whiteSpace={"nowrap"}>
                  Completion Date
                </Text>
                <DateCustom
                  value={completionDate}
                  onChange={setCompletionDate}
                />
              </Flex>
              {/* Scheme */}
              <SelectCustom
                list={schemes}
                value={scheme}
                onChange={setScheme}
                placeholder="Articleship Scheme"
              />
              {/* Location */}
              <StringInput
                value={location}
                onChange={setLocation}
                placeholder={"Location (City, State, Country)"}
              />
              {/* Description */}
              <StringTextArea
                value={description}
                onChange={setDescription}
                placeholder="Description"
              />
              {/* Firm Rating */}
              <SelectCustom
                list={firmRatings}
                value={firmRating}
                onChange={setFirmRating}
                placeholder="Firm Rating"
              />
            </Flex>
          </ModalBody>

          <ModalFooter justifyContent={"space-between"} pt={8}>
            <Button
              minW={32}
              variant="ghost"
              onClick={() => {
                setIsDeleteOpen(true);
              }}
            >
              Delete Experience
            </Button>
            <Button
              px={8}
              color={"white"}
              bgColor={"#33a854"}
              _hover={{
                bgColor: "rgba(51,130,84)",
              }}
              rounded={"full"}
              onClick={handleSave}
            >
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default withCookies(EditSingle);
