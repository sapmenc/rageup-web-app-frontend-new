// ResumeUploader.js
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";

interface ResumeUploaderProps {
  getRootProps: any;
  getInputProps: any;
  file: any;
  uploadedUrl: any;
  copyToClipboard: any;
  resetUploader: any;
}
const ResumeUploader: React.FC<ResumeUploaderProps> = ({
  getRootProps,
  getInputProps,
  file,
  uploadedUrl,
  copyToClipboard,
  resetUploader,
}) => {
  return (
    <Box maxW="md" mx="auto" p={4} borderWidth="1px" borderRadius="lg">
      <div {...getRootProps()} style={{ textAlign: "center" }}>
        <input {...getInputProps()} />
        <p>
          {file
            ? `Selected File: ${file.name}`
            : "Drag 'n' drop your resume file here, or click to select a file"}
        </p>
      </div>

      {/* <Button
        colorScheme="teal"
        mt={4}
        isLoading={isUploading}
        loadingText="Uploading..."
        onClick={uploadFile}
      >
        Upload Resume
      </Button> */}

      {file && (
        <Flex justifyContent={"center"}>
          <Button mt={4} onClick={resetUploader}>
            Reset
          </Button>
        </Flex>
      )}
    </Box>
  );
};

export default ResumeUploader;
