import { Box, Flex, Image } from "@chakra-ui/react";
import useTitle from "../../hooks/useTitle";
import PageLayout from "../../layouts/PageLayout";
import learning_bg_desktop from "../../assets/learning/learning_bg_desktop.jpg";
import learning_bg_mobile from "../../assets/learning/learning_bg_mobile.jpg";
import FieldCheckLayout from "../../layouts/FieldCheckLayout";
import useAuth from "../../hooks/useAuth";

const LearningsPage = () => {
  useAuth();
  const { setTitle } = useTitle();
  setTitle("RageUp - Learning");
  return (
    <PageLayout>
      <FieldCheckLayout>
        <Box
          bgColor={"#fcd3d7"}
          minH={{
            base: "calc(100vh - 10rem)",
            // md: "calc(100vh - 5rem)",
          }}
          w={"full"}
        >
          {/* mobile */}
          <Box className="block md:hidden" w={"full"} h={"full"}>
            <Image
              src={learning_bg_mobile}
              h={"full"}
              w={"full"}
              objectFit={"contain"}
            />
          </Box>
          {/* desktop */}
          <Flex
            w={"100%"}
            h={"full"}
            justifyContent={"center"}
            display={{
              base: "none",
              md: "flex",
            }}
          >
            <Box w={"full"} h={"full"} maxW={"3xl"}>
              <Image
                src={learning_bg_desktop}
                w={"full"}
                objectFit={"contain"}
              />
            </Box>
          </Flex>
        </Box>
      </FieldCheckLayout>
    </PageLayout>
  );
};

export default LearningsPage;
