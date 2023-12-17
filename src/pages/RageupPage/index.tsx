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
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { evaluateRageupTest, getTestById } from "../../api/rageUpTest";
import { withCookies } from "react-cookie";
import Timer from "../../components/Timer";
import Loader from "../../components/Loader";

type QuestionType = {
  _id: string;
  questionTitle: string;
  options: string[];
  answer: string | null;
};
type Test = {
  questions: QuestionType[];
  createdAt: string;
  updatedAt: string;
  userId: string;
  _id: string;
};

const RageupTestPage = (props: any) => {
  const { id } = useParams();
  const toast = useToast();
  const token = props.cookies.get("authToken");
  const [test, setTest] = useState<Test | null>(null);
  const [questions, setQuestions] = useState<QuestionType[] | null>(null);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [isInvoked, setIsInvoked] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const navigate = useNavigate();
  const handleSubmit = async () => {
    setIsSubmitting(true);
    if (!test) {
      setIsSubmitting(false);
      return;
    }
    const body = {
      submission: questions,
    };
    console.log(body);
    try {
      const res = await evaluateRageupTest(test._id, token, body);
      if (res.status === 200) {
        toast({
          title: "Submitted Successfully",
          description: "",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        setIsSubmitted(true);
        setScore(res?.data?.test?.testScore);
        console.log(res);
      } else {
        toast({
          title: "Error Occurred in submission.",
          description: "",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
    } catch {
      toast({
        title: "Error Occurred in submission.",
        description: "",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      setIsSubmitting(false);
    }
    setIsSubmitting(false);
  };
  const getTest = async () => {
    try {
      const res = await getTestById(id, token);
      if (200) {
        const questionsFetched = res?.data?.test?.questions;
        setTest(res?.data?.test);
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
      const uId = err?.response?.data?.test?.userId;
      if (err?.response?.status === 401) {
        // invalid user
        toast({
          title: "Error",
          description: "Invalid user.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
        setTimeout(() => {
          navigate(`/users/${uId}`);
        }, 2000);

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
        setTimeout(() => {
          navigate(`/users/${uId}`);
        }, 2000);

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

        setTimeout(() => {
          navigate(`/users/${uId}`);
        }, 2000);

        return;
      } else {
        // internal server error, please reload again
        toast({
          title: "Error",
          description: "Internal server error",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
        setTimeout(() => {
          navigate(`/users/${uId}`);
        }, 2000);

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
  console.log("test", test);

  return (
    <PageLayout>
      <FieldCheckLayout>
        <Flex justifyContent={"center"}>
          {isSubmitted && !isNaN(score) ? (
            `Your score is ${score}`
          ) : (
            <Flex
              flexDirection={"column"}
              py={2}
              px={4}
              gap={6}
              w={"full"}
              maxW={"2xl"}
            >
              {/* clock */}
              <Flex>
                {isSubmitting && <Loader message="Submitting..." />}
                {test && (
                  <Timer
                    startTime={test.createdAt}
                    duration={30}
                    onEndTimeReached={() => {
                      if (!isInvoked) {
                        setIsInvoked(true);
                        handleSubmit();
                      }
                    }}
                  />
                )}
              </Flex>
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
          )}
        </Flex>
      </FieldCheckLayout>
    </PageLayout>
  );
};

export default withCookies(RageupTestPage);
