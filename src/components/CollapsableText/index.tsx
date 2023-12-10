import { Text } from "@chakra-ui/react";
import { useState } from "react";

interface CollapsableTextProps {
  children: string;
}
const CollapsableText: React.FC<CollapsableTextProps> = ({ children }) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  return (
    <>
      <Text color={"#343434"} fontSize={"xs"} noOfLines={isExpanded ? 0 : 3}>
        {children}
      </Text>
      {children.length > 200 && (
        <Text
          color={"#343434"}
          fontSize={"xs"}
          display={"inline"}
          cursor={"pointer"}
          fontWeight={"bold"}
          _hover={{
            textDecoration: "underline",
          }}
          onClick={(e) => {
            e.stopPropagation();
            setIsExpanded((prev) => !prev);
          }}
        >
          {isExpanded ? "Show Less" : "Read More"}
        </Text>
      )}
    </>
  );
};

export default CollapsableText;
