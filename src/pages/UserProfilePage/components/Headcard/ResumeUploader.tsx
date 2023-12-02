// ResumeUploader.js
import { Box, Button, Heading, Text } from "@chakra-ui/react";
import useMediaUploader from "../../../../hooks/useMediaUploader";

const ResumeUploader = () => {
  const {
    getRootProps,
    getInputProps,
    file,
    uploadedUrl,
    isUploading,
    uploadFile,
    copyToClipboard,
    resetUploader,
  } = useMediaUploader();

  return (
    <Box maxW="md" mx="auto" mt={8} p={4} borderWidth="1px" borderRadius="lg">
      <Heading mb={4} textAlign="center">
        Resume Uploader
      </Heading>

      <div {...getRootProps()} style={{ textAlign: "center" }}>
        <input {...getInputProps()} />
        <p>
          {file
            ? `Selected File: ${file.name}`
            : "Drag 'n' drop your resume file here, or click to select a file"}
        </p>
      </div>

      <Button
        colorScheme="teal"
        mt={4}
        isLoading={isUploading}
        loadingText="Uploading..."
        onClick={uploadFile}
      >
        Upload Resume
      </Button>

      {uploadedUrl && (
        <Box mt={4}>
          <Text>Uploaded URL:</Text>
          <Text>{uploadedUrl}</Text>
          <Button mt={2} onClick={copyToClipboard}>
            Copy to Clipboard
          </Button>
        </Box>
      )}

      <Button mt={4} onClick={resetUploader}>
        Reset
      </Button>
    </Box>
  );
};

export default ResumeUploader;
