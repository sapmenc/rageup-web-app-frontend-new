import {
  Text,
  Flex,
  Input,
  Textarea,
  useToast,
  Button,
} from "@chakra-ui/react";
import { send } from "emailjs-com";
import { RAGE_UP_RED, RAGE_UP_RED_HOVER } from "../../foundations/colors";
const ContactUs = () => {
  const toast = useToast();

  const onSubmit = (e: any) => {
    e.preventDefault();
    const body: any = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      message: e.target.message.value,
    };
    if (!body.name || !body.email || !body.number || !body.comment) {
      toast({
        title: "Error",
        position: "top-right",
        description: "Please fill all the fields.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    send("service_0hqpz27", "template_k83j0db", body, "fvKc-Hpv1-Y4OFsey")
      .then(() => {
        toast({
          title: "Success",
          position: "top-right",
          description: "Your message has been sent successfully.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };

  return (
    <Flex
      data-aos="zoom-in-up"
      direction={"column"}
      justify={"center"}
      align={"center"}
      mb={"3rem"}
    >
      <Text
        align={"center"}
        mb={"2rem"}
        fontSize={["2.5rem", "2.5rem", "3rem"]}
      >
        Get in touch with us for queries
      </Text>
      <Flex
        width={["90vw", "80vw", "500px"]}
        height={"440px"}
        bg="#FFE4E1"
        boxShadow={"lg"}
        borderRadius={"1rem"}
        align={"center"}
        justify={"center"}
      >
        <form
          onSubmit={onSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            height: "90%",
            width: "90%",
            alignItems: "center",
          }}
        >
          <Input
            name="name"
            borderRadius={"0.5rem"}
            borderColor={"#8C0001"}
            w={["100%", "100%", "90%"]}
            placeholder="Name"
            required
          />
          <Input
            name="email"
            type="email"
            borderRadius={"0.5rem"}
            borderColor={"#8C0001"}
            w={["100%", "100%", "90%"]}
            placeholder="Email"
            required
          />
          <Input
            name="phone"
            type="tel"
            borderColor={"#8C0001"}
            borderRadius={"0.5rem"}
            w={["100%", "100%", "90%"]}
            placeholder="Phone Number"
            required
          />
          <Textarea
            name="message"
            borderRadius={"0.5rem"}
            borderColor={"#8C0001"}
            w={["100%", "100%", "90%"]}
            placeholder="Message"
            required
            mb="20px"
          />
          <Button
            fontSize={"lg"}
            backgroundColor={RAGE_UP_RED}
            color={"white"}
            _hover={{ backgroundColor: RAGE_UP_RED_HOVER }}
            onClick={() => {}}
          >
            Submit
          </Button>
        </form>
      </Flex>
    </Flex>
  );
};

export default ContactUs;
