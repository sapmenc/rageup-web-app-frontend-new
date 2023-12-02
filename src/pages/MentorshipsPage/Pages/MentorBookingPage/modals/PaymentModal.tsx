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
import React, { useEffect, useState } from "react";
import {
  RAGE_UP_RED,
  RAGE_UP_RED_HOVER,
} from "../../../../../foundations/colors";
import StringTextArea from "../../../../../components/inputs/StringTextArea";
import SelectCustom from "../../../../../components/inputs/SelectCustom";
import NumberInput from "../../../../../components/inputs/NumberInput";

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  price: number;
}
const PaymentModal: React.FC<PaymentModalProps> = ({
  isOpen,
  onClose,
  price,
}) => {
  const onPay = () => {};
  const [username, setUsername] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);
  const [phone, setPhone] = useState<string | null>(null);
  const [query, setQuery] = useState<string | null>(null);
  const [availableSlots, setAvailableSlots] = useState<string[]>([]);
  const [availableDates, setAvailableDates] = useState<string[]>([]);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);

  useEffect(() => {
    setUsername("Prakhar Kapoor");
    setEmail("prakharkapoor@gmail.com");
    setAvailableSlots(["9:00 AM", "10:30 PM"]);
    setAvailableDates(["10 Dec", "12 Dec"]);
  }, []);
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
            <Flex flexWrap={"wrap"} gap={3}>
              {availableSlots.map((slot) => {
                return (
                  <Flex
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
            </Flex>
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
            Pay Rs {price}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default PaymentModal;
