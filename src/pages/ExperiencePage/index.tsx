import PageLayout from "../../layouts/PageLayout";
import ArticleshipHistory from "../UserProfilePage/components/ArticleshipHistory";
import useTitle from "../../hooks/useTitle";
import { withCookies } from "react-cookie";
import { useEffect, useState } from "react";
import { getUserById } from "../../api/user";
import { toast } from "react-toastify";
import FieldCheckLayout from "../../layouts/FieldCheckLayout";
import useAuth from "../../hooks/useAuth";
import { Flex } from "@chakra-ui/react";

// eslint-disable-next-line
const ExperiencePage = (props: any) => {
  useAuth();
  // const id = useParams().id; // user id
  // fetch user details and pass in the components
  // eslint-disable-next-line
  const [data, setData] = useState<any>(null);
  const { setTitle } = useTitle();
  setTitle("RageUp - Profile - Articleship History");
  const userId = props.cookies.get("user")?._id;
  const token = props.cookies.get("authToken");
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
    return <div>Loading</div>;
  }
  if (!isTransferred) {
    return <div>access denied</div>;
  }
  return (
    <>
      <PageLayout>
        <FieldCheckLayout>
          <Flex justifyContent={"center"}>
            <Flex
              flexDirection={"column"}
              py={2}
              px={4}
              gap={4}
              w={"full"}
              maxW={"2xl"}
            >
              <ArticleshipHistory data={data} />
            </Flex>
          </Flex>
        </FieldCheckLayout>
      </PageLayout>
    </>
  );
};

export default withCookies(ExperiencePage);
