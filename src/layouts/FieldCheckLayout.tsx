import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Flex, Text } from "@chakra-ui/react";
import useAuth from "../hooks/useAuth";
import useFields from "../hooks/useFields";
import { RAGE_UP_RED, RAGE_UP_RED_HOVER } from "../foundations/colors";

interface FieldCheckLayoutProps {
  children: JSX.Element;
}
const FieldCheckLayout: React.FC<FieldCheckLayoutProps> = ({ children }) => {
  const { userId } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  const [shouldAllow, setShouldAllow] = useState(false);

  const { isMadatoryFilled } = useFields();
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // Replace with your actual logic from useFields()
        const res = await isMadatoryFilled();
        setShouldAllow(res);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return <>Loading...</>;
  }
  if (!shouldAllow) {
    // navigate(`/users/${userId}`);
    return (
      <Flex
        gap={4}
        alignItems={"center"}
        p={4}
        justifyContent={"center"}
        h={"70vh"}
        flexDir={"column"}
      >
        <Text fontWeight={"semibold"} textAlign={"center"}>
          Please complete your profile to access this page.
        </Text>

        <Button
          zIndex={999}
          size={"md"}
          rounded={"lg"}
          backgroundColor={RAGE_UP_RED}
          color={"white"}
          _hover={{ backgroundColor: RAGE_UP_RED_HOVER }}
          onClick={() => {
            navigate(`/users/${userId}`);
          }}
        >
          Go to Profile
        </Button>
      </Flex>
    );
  }
  return <>{children}</>;
};

export default FieldCheckLayout;
