import {
  Flex,
  Grid,
  GridItem,
  Select,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import PageLayout from "../../layouts/PageLayout";
import { RAGE_UP_RED } from "../../foundations/colors";
import VacancyCard from "./components/VacancyCard";
import { useEffect, useState } from "react";
import { getAllVacancies } from "../../api/vacancy";
import { toast } from "react-toastify";
import StringInput from "../../components/inputs/StringInput";
import departments from "./utils/departments";
import rageupInputProps from "../../helpers/rageupInputProps";
import useTitle from "../../hooks/useTitle";
import FieldCheckLayout from "../../layouts/FieldCheckLayout";
import useAuth from "../../hooks/useAuth";

const VacanciesPage = () => {
  useAuth();
  const [firmName, setFirmName] = useState<string | null>(null);
  const [department, setDepartment] = useState<string | null>(null);
  const [subDepartment, setSubDepartment] = useState<string | null>(null);
  const [location, setLocation] = useState<string | null>(null);
  // eslint-disable-next-line
  const [originalData, setOriginalData] = useState<any[]>([]);
  // eslint-disable-next-line
  const [data, setData] = useState<any[]>([]);
  const { setTitle } = useTitle();
  setTitle("RageUp - Vacancy");
  useEffect(() => {
    getAllVacancies()
      .then(function (response) {
        toast.success("Got all vacancies successfully");
        setData(response);
        setOriginalData(response);
      })
      .catch(function (error) {
        toast.error("Vacancy creation error: check logs.");
        console.log("Error in vacancy creation:", error);
      });
  }, []);
  useEffect(() => {
    const newData = originalData
      .filter((d) => {
        if (firmName === null) {
          return true;
        } else if (!d.firmName) {
          return true;
        } else {
          return d.firmName.toLowerCase().includes(firmName.toLowerCase());
        }
      })
      .filter((d) => {
        if (department === null) {
          return true;
        } else if (!d.department) {
          return true;
        } else {
          return d.department.toLowerCase().includes(department.toLowerCase());
        }
      })
      .filter((d) => {
        if (subDepartment === null) {
          return true;
        } else if (!d.subDepartment) {
          return true;
        } else {
          return d.subDepartment
            .toLowerCase()
            .includes(subDepartment.toLowerCase());
        }
      })
      .filter((d) => {
        if (location === null) {
          return true;
        } else if (!d.location) {
          return true;
        } else {
          return d.location.toLowerCase().includes(location.toLowerCase());
        }
      });
    setData(newData);
  }, [firmName, department, subDepartment, location, originalData]);
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
            <Tab w={"full"}>Vacancies</Tab>
            <Tab w={"full"}>Applied</Tab>
          </TabList>

          {/* vacancies */}
          <TabPanels
            display={"flex"}
            maxW={"6xl"}
            w={"full"}
            justifyContent={"center"}
          >
            <TabPanel w={"full"} display={"flex"} flexDir={"column"} gap={5}>
              <Flex
                flexDir={"column"}
                gap={2}
                w={"full"}
                maxW={"lg"}
                alignSelf={"center"}
              >
                <StringInput
                  placeholder="Firm Name"
                  value={firmName}
                  onChange={setFirmName}
                />
                <Flex gap={2}>
                  {/* department */}
                  <Select
                    w={"sm"}
                    placeholder="Department"
                    color={!department ? "gray.500" : "black"}
                    value={department ? department : ""}
                    onChange={(e) => {
                      const d = e.target.value;
                      if (!d) {
                        setDepartment(null);
                        setSubDepartment(null);
                      } else {
                        setDepartment(d);
                        setSubDepartment(null);
                      }
                    }}
                    {...rageupInputProps}
                  >
                    {Object.keys(departments).map((d, key) => {
                      return (
                        <option key={key} value={d}>
                          {d}
                        </option>
                      );
                    })}
                  </Select>
                  {department && departments[department].length > 0 && (
                    <Select
                      color={!subDepartment ? "gray.500" : "black"}
                      w={"sm"}
                      placeholder="Sub-Department"
                      value={subDepartment ? subDepartment : ""}
                      onChange={(e) => {
                        const sd = e.target.value;
                        if (!sd) {
                          setSubDepartment(null);
                        } else {
                          setSubDepartment(sd);
                        }
                      }}
                      {...rageupInputProps}
                    >
                      {departments[department].map((sd, key) => {
                        return (
                          <option key={key} value={sd}>
                            {sd}
                          </option>
                        );
                      })}
                    </Select>
                  )}
                  <StringInput
                    placeholder="Location"
                    value={location}
                    onChange={setLocation}
                  />
                </Flex>
              </Flex>
              <Grid
                gap={5}
                gridTemplateColumns={{
                  base: "repeat(1, 1fr)",
                  lg: "repeat(2, 1fr)",
                }}
              >
                {data?.map((v, idx) => {
                  return (
                    <GridItem key={idx}>
                      <VacancyCard data={v} />
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
                  return <GridItem key={idx}>{/* <VacancyCard /> */}</GridItem>;
                })}
              </Grid>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </FieldCheckLayout>
    </PageLayout>
  );
};

export default VacanciesPage;
