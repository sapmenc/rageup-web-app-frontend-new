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
} from "@chakra-ui/react";
import StringInput from "../../../../../components/inputs/StringInput";
import rageupInputProps from "../../../../../helpers/rageupInputProps";
import departments from "../utils/departments";
import DateCustom from "../../../../../components/inputs/DateCustom";
import SelectCustom from "../../../../../components/inputs/SelectCustom";
import StringTextArea from "../../../../../components/inputs/StringTextArea";
import schemes from "../utils/schemes";
import firmRatings from "../utils/firmRating";
interface EditSingleProps {
  isOpen: boolean;
  onClose: () => void;
}

const EditSingle: React.FC<EditSingleProps> = ({ isOpen, onClose }) => {
  const [firmName, setFirmName] = useState<string | null>(null);
  const [department, setDepartment] = useState<string | null>(null);
  const [subDepartment, setSubDepartment] = useState<string | null>(null);
  const [stateDate, setStartDate] = useState<string | null>(null);
  const [scheme, setScheme] = useState<string | null>(null);
  const [location, setLocation] = useState<string | null>(null);
  const [description, setDescription] = useState<string | null>(null);
  const [firmRating, setFirmRating] = useState<string | null>(null);
  const handleSave = () => {
    const body = {
      firmName,
      department,
      subDepartment,
      stateDate,
      scheme,
      location,
      description,
      firmRating,
    };
    console.log(body);
  };
  return (
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
              <DateCustom value={stateDate} onChange={setStartDate} />
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
          <Button minW={32} variant="ghost">
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
  );
};

export default EditSingle;
