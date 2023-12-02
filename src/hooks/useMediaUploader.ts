import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import AWS from "aws-sdk";

const useMediaUploader = () => {
  const [uploadedUrl, setUploadedUrl] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState<boolean>(false);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFile(acceptedFiles[0]);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const uploadFile = async () => {
    const S3_BUCKET = "rageup-media-storage";
    const REGION = "ap-south-1";

    AWS.config.update({
      accessKeyId: "AKIA6IUPXTLYJMHAVTIS",
      secretAccessKey: "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",
    });

    const s3 = new AWS.S3({
      params: { Bucket: S3_BUCKET },
      region: REGION,
    });

    if (file) {
      setIsUploading(true);

      const params: AWS.S3.PutObjectRequest = {
        Bucket: S3_BUCKET,
        Key: file.name.trim(),
        Body: file,
        ContentType: file.type,
      };

      const upload = s3
        .putObject(params)
        .on("httpUploadProgress", (evt: AWS.S3.ManagedUpload.Progress) => {
          console.log(evt);
        })
        .promise();

      try {
        await upload;
        const url = new URL(file.name.trim(), `https://${S3_BUCKET}.s3.${REGION}.amazonaws.com/`);
        const publicUrl = url.toString();
        setUploadedUrl(publicUrl);
        return publicUrl
      } catch (err) {
        console.error(err);
        return null
      } finally {
        setIsUploading(false);
      }
    }
  };

  const resetUploader = () => {
    setFile(null);
    setUploadedUrl(null);
    setIsUploading(false);
  };

  const copyToClipboard = () => {
    if (uploadedUrl) {
      navigator.clipboard.writeText(uploadedUrl);
    }
  };

  return {
    getRootProps,
    getInputProps,
    file,
    uploadedUrl,
    isUploading,
    uploadFile,
    copyToClipboard,
    resetUploader,
  };
};

export default useMediaUploader;
