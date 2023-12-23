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
  useToast
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import {
  RAGE_UP_RED,
  RAGE_UP_RED_HOVER,
} from "../../../../../foundations/colors";
import StringTextArea from "../../../../../components/inputs/StringTextArea";
import SelectCustom from "../../../../../components/inputs/SelectCustom";
import NumberInput from "../../../../../components/inputs/NumberInput";
import { useNavigate } from "react-router-dom";


interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  price: number;
  userNameProps: string;
  userEmailProps: string;
  slots: any;
  mentorID: string;
}
const PaymentModal: React.FC<PaymentModalProps> = ({
  isOpen,
  onClose,
  price,
  userNameProps,
  userEmailProps,
  slots,
}) => {
  const navigate = useNavigate();
  const toast = useToast();
  const onPay = () => {
    navigate(`/mentorships`);
    toast({
      title:"Mentor Booked",
      description:"Your session has been booked!",
      status:"success",
      position:"top-right",
    })
  };
  const [username, setUsername] = useState<string | null>(userNameProps);
  const [email, setEmail] = useState<string | null>(userEmailProps);
  const [phone, setPhone] = useState<string | null>(null);
  const [query, setQuery] = useState<string | null>(null);
  // const [availableSlots, setAvailableSlots] = useState<string[]>([]);
  const [availableDates, setAvailableDates] = useState<string[]>(
    slots && Array.isArray(slots) ? slots.map((e) => JSON.stringify(e)) : []
  );
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);

  // useEffect(() => {
  //   setAvailableSlots(["9:00 AM", "10:30 PM"]);
  // }, []);
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Mentor Booking</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex flexDir={"column"} gap={4}>
            <Text>
              <Text display={"inline"} fontWeight={"bold"}>
                Attendee Name:{" "}
              </Text>
              {username}
            </Text>
            <Text>
              <Text display={"inline"} fontWeight={"bold"}>
                Email:{" "}
              </Text>
              {email}
            </Text>
            <NumberInput
              value={phone}
              onChange={setPhone}
              placeholder="Phone"
            />
            <SelectCustom
              list={availableDates}
              onChange={setSelectedDate}
              placeholder="Select Date"
              value={selectedDate}
            />
            {/* Slots */}
            {/* <Flex flexWrap={"wrap"} gap={3}>
              {availableSlots.map((slot, key) => {
                return (
                  <Flex
                    key={key}
                    cursor={"pointer"}
                    boxShadow={"lg"}
                    backgroundColor={"#ffe4e1"}
                    py={2}
                    px={4}
                    borderRadius={"2xl"}
                    border={
                      selectedSlot === slot
                        ? `solid ${RAGE_UP_RED} 2px`
                        : "solid transparent 2px"
                    }
                    onClick={() => {
                      setSelectedSlot(selectedSlot === slot ? null : slot);
                    }}
                  >
                    {slot}
                  </Flex>
                );
              })}
            </Flex> */}
            <StringTextArea
              value={query}
              onChange={setQuery}
              placeholder="Any specific question?"
            />
          </Flex>
        </ModalBody>

        <ModalFooter justifyContent={"center"}>
          <Button
            alignSelf={"center"}
            backgroundColor={RAGE_UP_RED}
            color={"white"}
            _hover={{ backgroundColor: RAGE_UP_RED_HOVER }}
            minW={32}
            onClick={onPay}
          >
            {/* Pay Rs {price} */}
            Book
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default PaymentModal;
