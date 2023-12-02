import rageupInputProps from "../../../helpers/rageupInputProps";
import stringInputProcessor from "../../../helpers/input_processors/string";
import { RAGE_UP_RED } from "../../../foundations/colors";
import React from "react";
import { Flex, Tag, TagCloseButton, TagLabel, Select } from "@chakra-ui/react";
interface SelectWithTags {
  selectList: string[];
  tags: string[];
  setTags: React.Dispatch<React.SetStateAction<string[]>>;
}
const SelectWithTags: React.FC<SelectWithTags> = ({
  selectList,
  tags,
  setTags,
}) => {
  const list = Array.from(new Set<string>(selectList)); // removal of any duplicates
  return (
    <Flex flexDir={"column"} gap={4}>
      <Flex alignItems={"center"} gap={2}>
        <Select
          value={""}
          onChange={(e) => {
            const value = stringInputProcessor(e.target.value);

            if (value === null) {
              return;
            }
            const set = new Set(tags);
            if (!set.has(value)) {
              setTags((prev) => {
                return [...prev, value];
              });
            }
          }}
          {...rageupInputProps}
        >
          <option disabled={true} value=""></option>
          {list
            .filter((tagOption) => {
              return !tags.includes(tagOption);
            })
            .map((tagOption, key) => {
              return (
                <option key={key} value={tagOption}>
                  {tagOption}
                </option>
              );
            })}
        </Select>
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

export default SelectWithTags;
