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
import { useEffect, useRef, useState } from "react";
import { evaluateRageupTest, getTestById } from "../../api/rageUpTest";
import { withCookies } from "react-cookie";

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
  const handleSubmit = async () => {
    if (!test) {
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
          title: "Error Occured in submission.",
          description: "",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
    } catch {
      toast({
        title: "Error Occured in submission.",
        description: "",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
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
  console.log("test", test);

  interface TimerProps {
    startTime: string; // ISO format
    duration: number; // duration in minutes
    onEndTimeReached: () => void; // function to invoke when end time is reached
  }

  const Timer: React.FC<TimerProps> = ({
    startTime,
    duration,
    onEndTimeReached,
  }) => {
    const [currentTime, setCurrentTime] = useState(new Date());
    const [isInvoked, setIsInvoked] = useState<boolean>(false);
    const endTime = new Date(new Date(startTime).getTime() + duration * 60000);
    let interval: NodeJS.Timer | null = null;
    useEffect(() => {
      interval = setInterval(() => {
        setCurrentTime(new Date());
      }, 1000);

      if (currentTime >= endTime && interval) {
        if (!isInvoked) {
          onEndTimeReached();
          setIsInvoked(true);
        }
        clearInterval(interval);
      }

      return () => {
        if (interval) {
          clearInterval(interval);
        }
      };
    }, [currentTime]);

    const getRemainingTime = () => {
      const difference = endTime.getTime() - currentTime.getTime();
      if (difference <= 0) {
        return "00:00:00";
      }
      let hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      let minutes = Math.floor((difference / 1000 / 60) % 60);
      let seconds = Math.floor((difference / 1000) % 60);

      return `${hours.toString().padStart(2, "0")}:${minutes
        .toString()
        .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    };

    return (
      <div>
        {currentTime < endTime ? (
          <p>Time remaining: {getRemainingTime()}</p>
        ) : (
          <p>Time's up!</p>
        )}
      </div>
    );
  };

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
                {test && (
                  <Timer
                    startTime={test.createdAt}
                    duration={1}
                    onEndTimeReached={() => {
                      console.log("test submitted");
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
