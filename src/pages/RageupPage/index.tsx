import PageLayout from "../../layouts/PageLayout";
import FieldCheckLayout from "../../layouts/FieldCheckLayout";
import {
  Button,
  Flex,
  Radio,
  RadioGroup,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getTestById } from "../../api/rageUpTest";
import { withCookies } from "react-cookie";

type QuestionType = {
  _id: string;
  questionTitle: string;
  options: string[];
  answer: string | null;
};

const RageupTestPage = (props: any) => {
  const { id } = useParams();
  const toast = useToast();
  const token = props.cookies.get("authToken");

  const [questions, setQuestions] = useState<QuestionType[] | null>(null);
  const handleSubmit = async () => {};
  const getTest = async () => {
    try {
      const res = await getTestById(id, token);
      if (200) {
        const questionsFetched = res?.data?.test?.questions;
        console.log("questionsFetched", questionsFetched);
        toast({
          title: "Test fetched!",
          description: "",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        // @ts-ignore
        const testFetched: QuestionType[] =
          questionsFetched && Array.isArray(questionsFetched)
            ? questionsFetched
            : [];
        setQuestions(
          testFetched.map((t) => {
            return {
              _id: t._id,
              questionTitle: t.questionTitle,
              options: t.options,
              answer: null,
            };
          })
        );
      } else {
        toast({
          title: "Error",
          description: "Unexpected status.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
        return;
      }
    } catch (err: any) {
      console.log(err);
      if (err?.response?.status === 401) {
        // invalid user
        toast({
          title: "Error",
          description: "Invalid user.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
        return;
      } else if (err?.response?.status === 404) {
        // test no found
        toast({
          title: "Error",
          description: "Test no found.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
        return;
      } else if (err?.response?.status === 410) {
        // test already completed
        toast({
          title: "Error",
          description: "Test already completed.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
        return;
      } else {
        // internal server error, please reload again
        toast({
          title: "Error",
          description: "Internal server error, please reload again.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
        return;
      }
    }
  };
  useEffect(() => {
    getTest();
  }, []);
  if (!questions || !Array.isArray(questions)) {
    return null;
  }
  console.log("test data", questions);

  return (
    <PageLayout>
      <FieldCheckLayout>
        <Flex justifyContent={"center"}>
          <Flex
            flexDirection={"column"}
            py={2}
            px={4}
            gap={6}
            w={"full"}
            maxW={"2xl"}
          >
            {/* questions */}
            {questions.map((question, key) => {
              return (
                <Flex key={key} flexDir={"column"} gap={5}>
                  <Text fontWeight={"semibold"}>{`Q ${key + 1}. ${
                    question?.questionTitle || ""
                  }`}</Text>
                  <Flex>
                    <RadioGroup
                      onChange={(e) => {
                        if (!question) {
                          return;
                        }
                        setQuestions((prev) => {
                          return (
                            prev?.map((question, j) => {
                              return {
                                ...question,
                                answer: key === j ? e : question?.answer,
                              };
                            }) || []
                          );
                        });
                      }}
                      value={question.answer || ""}
                    >
                      <Flex flexDir="column">
                        {question?.options?.map((option, key) => {
                          return (
                            <Radio colorScheme="red" key={key} value={option}>
                              {option}
                            </Radio>
                          );
                        })}
                      </Flex>
                    </RadioGroup>
                  </Flex>
                </Flex>
              );
            })}

            {/* submit button */}
            <Button onClick={handleSubmit}>Submit</Button>
          </Flex>
        </Flex>
      </FieldCheckLayout>
    </PageLayout>
  );
};

export default withCookies(RageupTestPage);
