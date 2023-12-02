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
  Link,
  IconButton,
} from "@chakra-ui/react";
import { ChangeEvent, useEffect, useState } from "react";
import {
  RAGE_UP_RED,
  RAGE_UP_RED_HOVER,
} from "../../../../../foundations/colors";
import StringInput from "../../../../../components/inputs/StringInput";
import SelectCustom from "../../../../../components/inputs/SelectCustom";
import { updateUserProfile } from "../../../../../api/user";
import { withCookies } from "react-cookie";
import useMediaUploader from "../../../../../hooks/useMediaUploader";
import ResumeUploader from "../ResumeUploader";
import { CloseIcon } from "@chakra-ui/icons";

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
  const {
    getRootProps: resumeGetRootProps,
    getInputProps: resumeGetInputProps,
    file: resumeFile,
    uploadedUrl: resumeUploadedUrl,
    isUploading: resumeIsUploading,
    uploadFile: resumeUploadFile,
    copyToClipboard: resumeCopyToClipboard,
    resetUploader: resumeResetUploader,
  } = useMediaUploader();
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

  let [currentResumeLink, setCurrentResumeLink] = useState<string>(
    data?.resumeLink || ""
  );
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
      let resumeUrl = null;
      if (resumeFile) {
        resumeUrl = await resumeUploadFile();
      }

      console.log("imgRes", purl);
      console.log("final resume link", resumeUrl);
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
      if (resumeUrl) {
        body.resumeLink = resumeUrl;
      } else if (currentResumeLink) {
      } else {
        body.resumeLink = null;
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
        status: "error",
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
              <Flex flexDir={"column"} gap={3}>
                {currentResumeLink && (
                  <Flex gap={2} alignItems={"center"}>
                    <Link
                      w={"full"}
                      fontWeight={"bold"}
                      href={currentResumeLink || ""}
                      target="_blank"
                    >
                      <Flex>
                        <Button
                          py={5}
                          alignSelf={"center"}
                          backgroundColor={RAGE_UP_RED}
                          color={"white"}
                          _hover={{ backgroundColor: RAGE_UP_RED_HOVER }}
                          w={"full"}
                          rounded={"xl"}
                          size={"sm"}
                        >
                          Current Resume
                        </Button>
                      </Flex>
                    </Link>
                    <IconButton
                      size={"sm"}
                      aria-label="Clear resume"
                      icon={<CloseIcon />}
                      onClick={() => {
                        setCurrentResumeLink("");
                      }}
                    />
                  </Flex>
                )}
                <ResumeUploader
                  uploadedUrl={resumeUploadedUrl}
                  copyToClipboard={resumeCopyToClipboard}
                  file={resumeFile}
                  getInputProps={resumeGetInputProps}
                  getRootProps={resumeGetRootProps}
                  resetUploader={resumeResetUploader}
                />
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
