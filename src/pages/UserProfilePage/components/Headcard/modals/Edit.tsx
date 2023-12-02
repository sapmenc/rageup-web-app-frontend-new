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
  Input,
  FormLabel,
  Text,
  Box,
  Avatar,
  useToast,
} from "@chakra-ui/react";
import { ChangeEvent, useState } from "react";
import { RAGE_UP_RED } from "../../../../../foundations/colors";
import StringInput from "../../../../../components/inputs/StringInput";
import SelectCustom from "../../../../../components/inputs/SelectCustom";
import { updateUserProfile } from "../../../../../api/user";
import { withCookies } from "react-cookie";
import useMediaUploader from "../../../../../hooks/useMediaUploader";

interface EditProps {
  isOpen: boolean;
  onClose: () => void;
  // eslint-disable-next-line
  cookies: any;
  // eslint-disable-next-line
  data: any;
}

const Edit: React.FC<EditProps> = ({ isOpen, onClose, cookies, data }) => {
  const toast = useToast();
  const userId = cookies.get("user")?._id;
  const token = cookies.get("authToken");
  const [name, setName] = useState<string | null>(
    (data?.name as string) || null
  );
  const [gender, setGender] = useState<"Male" | "Female" | null>(
    (data?.gender as "Male" | "Female") || null
  );
  const [headline, setHeadline] = useState<string | null>(
    (data?.headline as string) || null
  );
  const [srn, setSrn] = useState<string | null>((data?.srn as string) || null);
  const [linkedinProfileLink, setLinkedinProfileLink] = useState<string | null>(
    (data?.linkedinProfileLink as string) || null
  );
  const [state, setState] = useState<string | null>(
    (data?.state as string) || null
  );
  const [city, setCity] = useState<string | null>(
    (data?.city as string) || null
  );
  const [resumeFile, setResumeFile] = useState<File | null>(null);

  const {
    getInputProps: getUploaderInputProps,
    file: uploadedFile,
    uploadedUrl,
    uploadFile: handleUploadFile,
  } = useMediaUploader();

  // eslint-disable-next-line
  const handleSave = async (e: any) => {
    e.preventDefault();
    try {
      if (!name) {
        toast({
          title: "Name Required!",
          position: "top",
          status: "error",
          duration: 1000,
          isClosable: true,
          variant: "subtle",
        });
        return;
      }
      if (!srn) {
        toast({
          title: "SRN Required!",
          position: "top",
          status: "error",
          duration: 1000,
          isClosable: true,
          variant: "subtle",
        });
        return;
      }
      const purl = await handleUploadFile();

      console.log("imgRes", purl);
      let body: any = {
        name,
        gender,
        headline,
        srn,
        linkedinProfileLink,
        state,
        city,
      };
      if (purl) {
        body.profilePicture = purl;
      }
      const res = await updateUserProfile(userId, body, token);
      if (res.status === 200) {
        toast({
          title: "User data updated successfully",
          position: "top",
          status: "success",
          duration: 1000,
          isClosable: true,
          variant: "subtle",
        });
        onClose();
      }
    } catch (err) {
      toast({
        title: "Error in user data updation",
        position: "top",
        status: "success",
        duration: 1000,
        isClosable: true,
        variant: "subtle",
      });
      console.log("Error in user data fetch:", err);
      onClose();
    } finally {
      window.location.reload();
    }
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent rounded={"2xl"}>
        <ModalHeader></ModalHeader>
        <ModalCloseButton />
        <ModalBody py={6}>
          <Flex flexDirection={"column"}>
            {/* dp */}
            <Flex flexDir={"column"} alignItems={"center"} w={"100%"} gap={4}>
              {/* <Box boxSize="">
                <Avatar
                  size="2xl"
                  name="Segun Adebayo"
                  src="https://bit.ly/sage-adebayo"
                />
              </Box>
              <Button>Upload Image</Button> */}
              <Flex
                flexDirection={"column"}
                alignItems={"center"}
                w={"100%"}
                gap={4}
              >
                <Box boxSize="">
                  <Avatar
                    size="2xl"
                    name="Segun Adebayo"
                    src={uploadedUrl || data?.profilePicture}
                  />
                </Box>
                <Flex
                  w={"100%"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                  gap={2}
                  py={2}
                  flexDirection={{
                    base: "column",
                  }}
                  flexWrap={"wrap"}
                >
                  <Text
                    w={"100%"}
                    fontSize={"sm"}
                    fontWeight={"bold"}
                    textAlign={"center"}
                    mb={5}
                  >
                    {uploadedFile?.name || data?.profilePicture}
                  </Text>
                  <FormLabel
                    flexShrink={0}
                    cursor={"pointer"}
                    id="file-input-label"
                    // eslint-disable-next-line
                    /* @ts-ignore */
                    htmlFor="file-input"
                    bgColor={RAGE_UP_RED}
                    color={"white"}
                    paddingY={1}
                    paddingX={4}
                    rounded={"lg"}
                    fontWeight={"semibold"}
                  >
                    Upload Image
                  </FormLabel>
                </Flex>

                <input
                  id="file-input"
                  name="file-input"
                  type="file"
                  accept="image/*"
                  {...getUploaderInputProps()}
                />
              </Flex>
            </Flex>
            {/* other details */}
            <Flex flexDirection={"column"} gap={4}>
              {/* Name */}
              <StringInput
                placeholder="Name (Mandatory)"
                value={name}
                onChange={setName}
              />
              {/* Gender */}
              <SelectCustom
                list={["Male", "Female"]}
                value={gender}
                // eslint-disable-next-line
                // @ts-ignores
                onChange={setGender}
                placeholder="Gender"
              />

              {/* Headline */}
              <StringInput
                placeholder="Headline"
                value={headline}
                onChange={setHeadline}
              />
              <StringInput
                placeholder="SRN / Registration No. (Mandatory)"
                value={srn}
                onChange={setSrn}
              />
              <StringInput
                placeholder="LinkedIn Profile Link"
                value={linkedinProfileLink}
                onChange={setLinkedinProfileLink}
              />
              <Flex
                gap={2}
                flexDirection={{
                  base: "column",
                  md: "row",
                }}
              >
                <StringInput
                  placeholder="State"
                  value={state}
                  onChange={setState}
                />
                <StringInput
                  placeholder="City"
                  value={city}
                  onChange={setCity}
                />
              </Flex>
              <Flex>
                <Input
                  id="file-input"
                  name="file-input"
                  border={"none"}
                  w={"100%"}
                  type="file"
                  accept=".pdf"
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    const file = e.target.files?.[0];
                    if (file && file.type === "application/pdf") {
                      setResumeFile(file);
                    } else {
                      alert("Please select a valid PDF file.");
                    }
                  }}
                />
                <Flex
                  w={"100%"}
                  alignItems={"center"}
                  // justifyContent={"space-between"}
                  gap={2}
                  py={2}
                  flexDirection={{
                    base: "column",
                  }}
                  flexWrap={"wrap"}
                >
                  <Text
                    w={"100%"}
                    fontSize={"sm"}
                    fontWeight={"bold"}
                    textAlign={"center"}
                  >
                    {resumeFile ? resumeFile.name : "No file chosen"}
                  </Text>
                  <FormLabel
                    flexShrink={0}
                    cursor={"pointer"}
                    id="file-input-label"
                    // eslint-disable-next-line
                    /* @ts-ignore */
                    htmlFor="file-input"
                    bgColor={RAGE_UP_RED}
                    color={"white"}
                    paddingY={1}
                    paddingX={4}
                    rounded={"lg"}
                    fontWeight={"semibold"}
                  >
                    Upload Resume
                  </FormLabel>
                </Flex>
              </Flex>
            </Flex>
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
