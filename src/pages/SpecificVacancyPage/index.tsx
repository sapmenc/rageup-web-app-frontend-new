import { Flex, Heading } from "@chakra-ui/react";
import PageLayout from "../../layouts/PageLayout";
import ExposureInArticleship from "./components/ExposureInArticleship";
import ClientCategory from "./components/ClientCategory";
import TypeOfClients from "./components/TypeOfClients";
import Stipend from "./components/Stipend";
import Details from "./components/Details";
import MoreInfo from "./components/MoreInfo";
import OtherDepartments from "./components/OtherDepartments";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { getVacancyById } from "../../api/vacancy";
import { toast } from "react-toastify";
import ApplyCard from "./components/ApplyCard";
import useTitle from "../../hooks/useTitle";
import FieldCheckLayout from "../../layouts/FieldCheckLayout";
import useAuth from "../../hooks/useAuth";

const SpecificVacancyPage = () => {
  useAuth();
  const { setTitle } = useTitle();
  setTitle("RageUp - Vacancy");
  const vacancyId = useLocation().pathname.split("/")[2];
  // eslint-disable-next-line
  const [data, setData] = useState<any>(null);
  useEffect(() => {
    getVacancyById(vacancyId)
      .then(function (response) {
        setData(response?.data?.data);
        toast.success("Got the vacancy data successfully");
      })
      .catch(function (error) {
        toast.error("Vacancy creation error: check logs.");
        console.log("Error in vacancy creation:", error);
      });
  }, []);

  if (!data) {
    return null;
  }
  return (
    <PageLayout>
      <FieldCheckLayout>
        <Flex justifyContent={"center"}>
          <Flex
            py={2}
            px={4}
            flexDirection={"column"}
            gap={4}
            w={"full"}
            maxW={"2xl"}
          >
            <Heading
              textAlign={{
                base: "start",
                lg: "center",
              }}
            >
              {data.firmName}
            </Heading>
            <Flex flexDirection={"column"} gap={16}>
              <Flex flexDirection={"column"} gap={4}>
                <ApplyCard data={data} />
                {data?.exposures && data?.exposures?.length > 0 && (
                  <ExposureInArticleship exposures={data?.exposures} />
                )}
                {data?.clientCategories &&
                  data?.clientCategories.length > 0 && (
                    <ClientCategory categories={data?.clientCategories} />
                  )}
                {data?.typesOfClient && data?.typesOfClient?.length > 0 && (
                  <TypeOfClients types={data?.typesOfClient} />
                )}
                {data?.stipend && (
                  <Stipend
                    stipend1={data?.stipend?.stipend1}
                    stipend2={data?.stipend?.stipend2}
                  />
                )}
                {data?.generalInfo && (
                  <Details
                    noOfEmployees={data?.generalInfo?.noOfEmployees}
                    noticePeriod={data?.generalInfo?.noticePeriod}
                    websiteLink={data?.generalInfo?.websiteLink}
                    workingDays={data?.generalInfo?.workingDays}
                  />
                )}
                {data?.moreInfo && <MoreInfo info={data?.moreInfo} />}
                {data?.otherDepartments &&
                  data?.otherDepartments?.length > 0 && (
                    <OtherDepartments
                      otherDepartments={data?.otherDepartments}
                    />
                  )}
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </FieldCheckLayout>
    </PageLayout>
  );
};

export default SpecificVacancyPage;
