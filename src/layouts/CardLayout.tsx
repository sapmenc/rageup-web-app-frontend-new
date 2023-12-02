import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  IconButton,
  Text,
} from "@chakra-ui/react";
import React, { ReactNode } from "react";

import { Link } from "react-router-dom";

type SeeAll = {
  link: string;
  align?: "left" | "right"; // by default left align
};
type Utility = {
  label: string;
  onUtility: () => void;
  LeftIcon?: JSX.Element;
};
type CardLayoutProps = {
  heading?: string;
  children?: ReactNode;
  backgroundColor?: string;
  utility?: Utility;
  seeAll?: SeeAll;
};
const CardLayout: React.FC<CardLayoutProps> = ({
  heading,
  seeAll,
  children,
  backgroundColor,
  utility,
}) => {
  return (
    <Card
      height={"100%"}
      width={"100%"}
      backgroundColor={backgroundColor ? backgroundColor : "white"}
      justifyContent={"space-between"}
      border={"1px solid #00000014"}
      px={3}
      // maxH={"580px"}
    >
      <Flex direction={"column"} height={"100%"}>
        <Flex justifyContent={"space-between"} alignItems={"center"} px={2}>
          {/* HEADER */}
          {heading && (
            <CardHeader pl={0}>
              <Heading fontWeight={"semibold"} fontSize={"18px"}>
                {heading}
              </Heading>
            </CardHeader>
          )}

          {utility && (
            <IconButton
              isRound={true}
              variant="solid"
              aria-label="Done"
              fontSize="16px"
              backgroundColor={"white"}
              shadow={"lg"}
              icon={utility.LeftIcon}
              _hover={{
                backgroundColor: "#f6f6f6",
              }}
              onClick={utility.onUtility}
            />
          )}
        </Flex>

        {/* BODY */}
        <CardBody
          padding={2}
          paddingBottom={4}

          // backgroundColor={"red.200"}
        >
          {children}
        </CardBody>
      </Flex>

      {/* FOOTER */}
      {seeAll && (
        <CardFooter
          display={"flex"}
          justifyContent={
            seeAll && seeAll.align === "right" ? "flex-end" : "flex-start"
          }
        >
          <Link to={seeAll.link}>
            <Text color={"#2a4365"} fontWeight={"bold"}>
              See all
            </Text>
          </Link>
        </CardFooter>
      )}
    </Card>
  );
};

export default CardLayout;
