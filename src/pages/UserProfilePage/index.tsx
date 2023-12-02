import { Flex } from "@chakra-ui/react";
import PageLayout from "../../layouts/PageLayout";
import Headcard from "./components/Headcard";
import Location from "./components/Location";
import Education from "./components/Education";
import ArticleshipCompliance from "./components/ArticleshipCompliance";
import ArticleshipHistory from "./components/ArticleshipHistory";
import RageupTest from "./components/RageupTest";
import { withCookies } from "react-cookie";
import { getUserById } from "../../api/user";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import useTitle from "../../hooks/useTitle";
import useAuth from "../../hooks/useAuth";

// eslint-disable-next-line
const UserProfilePage = (props: any) => {
  useAuth();
  const userId = props.cookies.get("user")?._id;
  const token = props.cookies.get("authToken");
  // eslint-disable-next-line
  const [data, setData] = useState<any>(null);
  const { setTitle } = useTitle();
  setTitle("RageUp - Profile");

  const articleshipStatus: string =
    (data?.educations?.articleshipStatus as string) || "";
  const isTransferred: boolean =
    articleshipStatus.toLowerCase() === "Transferred".toLocaleLowerCase();
  useEffect(() => {
    getUserById(userId, token)
      .then(function (response) {
        toast.success("Got user data successfully");
        setData(response?.data?.data);
      })
      .catch(function (error) {
        toast.error("User data fetch error: check logs.");
        console.log("Error in user data fetch:", error);
      });
  }, []);
  if (!data) {
    return (
      <PageLayout>
        <>User data is Loading...</>
      </PageLayout>
    );
  }
  return (
    <PageLayout>
      <Flex justifyContent={"center"}>
        <Flex
          flexDirection={"column"}
          py={2}
          px={4}
          gap={4}
          w={"full"}
          maxW={"2xl"}
        >
          <Headcard data={data} />
          <Location data={data} />
          <Education data={data} />
          <ArticleshipCompliance data={data} />
          {isTransferred && <ArticleshipHistory data={data} />}
          <RageupTest />
        </Flex>
      </Flex>
    </PageLayout>
  );
};

export default withCookies(UserProfilePage);
