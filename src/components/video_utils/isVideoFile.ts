const isVideoFile = (file: File): boolean => {
  // List of common video file extensions
  const videoExtensions = ["mp4", "avi", "mkv", "mov", "wmv", "flv", "webm"];

  // Extract the file extension from the file name
  const fileExtension = file.name.split(".").pop()?.toLowerCase();

  // Check if the file extension is in the list of video extensions
  return videoExtensions.includes(fileExtension ?? "");
};
export default isVideoFile;
