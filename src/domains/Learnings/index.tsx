import {
  Grid,
  GridItem,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import useTitle from "../../hooks/useTitle";
import PageLayout from "../../layouts/PageLayout";
import FieldCheckLayout from "../../layouts/FieldCheckLayout";
import useAuth from "../../hooks/useAuth";
import { RAGE_UP_RED } from "../../foundations/colors";
import CourseCard from "./components/CourseCard";

const LearningsPage = () => {
  useAuth();
  const { setTitle } = useTitle();
  setTitle("RageUp - Learning");
  return (
    <PageLayout>
      <FieldCheckLayout>
        <Tabs
          px={{
            base: 0,
            lg: 10,
          }}
          colorScheme="white"
          display={"flex"}
          flexDir={"column"}
          alignItems={"center"}
          gap={5}
        >
          <TabList
            maxW={"lg"}
            w={"full"}
            pb={2}
            display={"flex"}
            backgroundColor={RAGE_UP_RED}
            color={"white"}
            fontWeight={"bold"}
            _active={{ color: RAGE_UP_RED }}
          >
            <Tab w={"full"}>Courses</Tab>
            <Tab w={"full"}>Purchased</Tab>
          </TabList>

          {/* vacancies */}
          <TabPanels
            display={"flex"}
            maxW={"6xl"}
            w={"full"}
            justifyContent={"center"}
          >
            <TabPanel w={"full"} display={"flex"} flexDir={"column"} gap={5}>
              <Grid
                gap={5}
                gridTemplateColumns={{
                  base: "repeat(1, 1fr)",
                  lg: "repeat(2, 1fr)",
                }}
              >
                {[1, 1, 1, 1, 1]?.map((v, idx) => {
                  return (
                    <GridItem
                      key={idx}
                      display={"flex"}
                      justifyContent={"center"}
                    >
                      <CourseCard data={v} />
                    </GridItem>
                  );
                })}
              </Grid>
            </TabPanel>

            {/* saved */}
            <TabPanel w={"full"}>
              <Grid
                gap={5}
                gridTemplateColumns={{
                  base: "repeat(1, 1fr)",
                  lg: "repeat(2, 1fr)",
                }}
              >
                {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, idx) => {
                  return (
                    <GridItem
                      key={idx}
                      display={"flex"}
                      justifyContent={"center"}
                    >
                      {/* <VacancyCard /> */}
                    </GridItem>
                  );
                })}
              </Grid>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </FieldCheckLayout>
    </PageLayout>
  );
};

export default LearningsPage;
