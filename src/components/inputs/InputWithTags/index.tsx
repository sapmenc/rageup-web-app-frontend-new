import {
  Button,
  Flex,
  Input,
  Tag,
  TagCloseButton,
  TagLabel,
} from "@chakra-ui/react";
import rageupInputProps from "../../../helpers/rageupInputProps";
import stringInputProcessor from "../../../helpers/input_processors/string";
import { RAGE_UP_RED } from "../../../foundations/colors";
import { useState } from "react";

interface InputWithTagsProps {
  tags: string[];
  setTags: React.Dispatch<React.SetStateAction<string[]>>;
  placeholder?: string;
}
const InputWithTags: React.FC<InputWithTagsProps> = ({
  tags,
  setTags,
  placeholder,
}) => {
  const [tempTag, setTempTag] = useState<string | null>(null);
  return (
    <Flex flexDir={"column"} gap={4}>
      <Flex alignItems={"center"} gap={2}>
        <Input
          w={48}
          placeholder={placeholder ? placeholder : ""}
          value={tempTag ? tempTag : ""}
          onChange={(e) => {
            const value = stringInputProcessor(e.target.value);
            setTempTag(value === "" ? null : value);
          }}
          {...rageupInputProps}
        />

        <Button
          onClick={() => {
            const value = tempTag;
            if (value === null) {
              return;
            }
            const set = new Set(tags);
            if (!set.has(value)) {
              setTags((prev) => {
                return [...prev, value];
              });
            }
            setTempTag(null);
          }}
        >
          add
        </Button>
      </Flex>
      {tags.length > 0 && (
        <Flex gap={2} flexWrap={"wrap"} alignItems={"center"}>
          {tags.map((tag, key) => {
            return (
              <Tag
                size={"lg"}
                key={key}
                borderRadius="full"
                variant="solid"
                backgroundColor={RAGE_UP_RED}
                color={"white"}
              >
                <TagLabel>{tag}</TagLabel>
                <TagCloseButton
                  onClick={() => {
                    setTags((prev) => {
                      return prev.filter((x) => x != tag);
                    });
                  }}
                />
              </Tag>
            );
          })}
        </Flex>
      )}
    </Flex>
  );
};

export default InputWithTags;
