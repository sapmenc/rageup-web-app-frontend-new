import { Flex } from "@chakra-ui/react";
import React from "react";
import { Player } from "video-react";
import "video-react/dist/video-react.css"; // Import the styles

interface VideoPlayerProps {
  videoLink: string;
}
const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoLink }) => {
  return (
    <>
      <Flex justify={"center"}>
        {videoLink ? (
          <Player fluid={false} height={400} width={711}>
            <source src={videoLink} />
          </Player>
        ) : (
          "no video"
        )}
      </Flex>
    </>
  );
};

export default VideoPlayer;
