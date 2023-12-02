import { Flex, Heading } from "@chakra-ui/react";
import React from "react";

interface DepartmentTag {
  label: string;
}
const DepartmentTag: React.FC<DepartmentTag> = ({ label }) => {
  return (
    <Flex
      border={"1px solid #a7a7a7"}
      justifyContent={"center"}
      alignItems={"center"}
      rounded={"full"}
      py={2}
      px={4}
    >
      {label}
    </Flex>
  );
};
interface OtherDepartmentsProps {
  otherDepartments: string[];
}
const OtherDepartments: React.FC<OtherDepartmentsProps> = ({
  otherDepartments,
}) => {
  return (
    <Flex flexDir={"column"} gap={4} mt={5}>
      <Heading fontWeight={"semibold"} fontSize={"18px"}>
        Other Departments
      </Heading>
      <Flex gap={2}>
        {otherDepartments.map((d, key) => {
          return (
            <React.Fragment key={key}>
              <DepartmentTag label={d} />
            </React.Fragment>
          );
        })}
      </Flex>
    </Flex>
  );
};

export default OtherDepartments;
