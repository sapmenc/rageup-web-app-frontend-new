import { AddIcon, EditIcon } from "@chakra-ui/icons";
import CardLayout from "../../../../layouts/CardLayout";
import { Flex } from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";
import SingleHistory from "./components/SingleHistory";
import SingleHistoryEditable from "./components/SingleHistoryEditable";
import Add from "./modals/Add";
import React, { useState } from "react";

interface ArticleshipHistoryProps {
  // eslint-disable-next-line
  data: any;
}
const ArticleshipHistory: React.FC<ArticleshipHistoryProps> = ({ data }) => {
  const USER_PAGE_REGEX = /^\/users\/\w+\/?$/;
  const location = useLocation();
  const routeName = location.pathname;
  const navigate = useNavigate();
  const [isAddOpen, setIsAddOpen] = useState<boolean>(false);
  const histories = data?.articleshipHistory || [];

  return (
    <>
      {isAddOpen && (
        <Add
          isOpen={isAddOpen}
          onClose={() => {
            setIsAddOpen(false);
          }}
        />
      )}
      <CardLayout
        heading="Articleship History"
        utility={{
          label: "",
          onUtility: () => {
            if (USER_PAGE_REGEX.test(routeName)) {
              navigate(`${routeName}/experience`);
            } else {
              setIsAddOpen(true);
            }
          },
          LeftIcon: USER_PAGE_REGEX.test(routeName) ? (
            <EditIcon />
          ) : (
            <AddIcon />
          ),
        }}
      >
        <Flex flexDir={"column"} gap={3}>
          {/* eslint-disable-next-line */}
          {/* @ts-ignore */}
          {histories.map((history, key) => {
            return (
              <React.Fragment key={key}>
                {USER_PAGE_REGEX.test(routeName) ? (
                  <SingleHistory history={history} />
                ) : (
                  <SingleHistoryEditable history={history} />
                )}
              </React.Fragment>
            );
          })}
        </Flex>
      </CardLayout>
    </>
  );
};

export default ArticleshipHistory;
