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
import DateCustom from "../../../../../components/inputs/DateCustom";
import SelectCustom from "../../../../../components/inputs/SelectCustom";
import StringTextArea from "../../../../../components/inputs/StringTextArea";
import departments from "../utils/departments";
import firmRatings from "../utils/firmRating";
import schemes from "../utils/schemes";
import { withCookies } from "react-cookie";
import { createArticleshipHistory } from "../../../../../api/articleshipHistory";
interface AddProps {
  isOpen: boolean;
  onClose: () => void;
  // eslint-disable-next-line
  cookies: any;
}

const Add: React.FC<AddProps> = ({ isOpen, onClose, cookies }) => {
  const toast = useToast();
  const [firmName, setFirmName] = useState<string | null>(null);
  const [department, setDepartment] = useState<string | null>(null);
  const [subDepartment, setSubDepartment] = useState<string | null>(null);
  const [startDate, setStartDate] = useState<string | null>(null);
  const [completionDate, setCompletionDate] = useState<string | null>(null);
  const [scheme, setScheme] = useState<string | null>(null);
  const [location, setLocation] = useState<string | null>(null);
  const [description, setDescription] = useState<string | null>(null);
  const [firmRating, setFirmRating] = useState<string | null>(null);
  const userId = cookies.get("user")?._id;
  const token = cookies.get("authToken");
  const handleSave = () => {
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
      user: userId,
    };
    createArticleshipHistory(body, token)
      .then(function () {
        toast({
          title: "Articleship history created successfully",
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
          title: "Error in Articleship history creation",
          position: "top",
          status: "success",
          duration: 1000,
          isClosable: true,
          variant: "subtle",
        });
        console.log("Error in user data fetch:", error);
        onClose();
      });
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose} size={"3xl"}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add Articleship History</ModalHeader>
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
            {/* Start Date */}
            <Flex alignItems={"center"} gap={2}>
              <Text width={"fit-content"} whiteSpace={"nowrap"}>
                Completion Date
              </Text>
              <DateCustom value={completionDate} onChange={setCompletionDate} />
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

        <ModalFooter justifyContent={"center"} pt={8}>
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
            Save
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default withCookies(Add);
