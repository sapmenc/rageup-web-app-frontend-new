import { useCookies } from "react-cookie";
import { getUserById } from "../api/user";
const useFields = () => {
  const [cookies] = useCookies(["myCookie"]);

  const isMadatoryFilled = () => {
    // eslint-disable-next-line
    // @ts-ignore
    const userId = cookies?.user?._id;
    // eslint-disable-next-line
    // @ts-ignore
    const token = cookies?.user?.token;

    return getUserById(userId, token)
      .then(function (response) {
        const data = response?.data?.data;
        // pass 1
        if (!data || !data?.name || !data?.srn) {
          console.log("pass 1");
          return false;
        }

        const preferredLocations = data?.preferredLocations;
        // pass 2
        if (
          !preferredLocations ||
          !Array.isArray(preferredLocations) ||
          preferredLocations.length < 1 ||
          !preferredLocations[0]
        ) {
          console.log("pass 2");
          return false;
        }

        const educations = data?.educations;
        // pass 3
        if (
          !educations ||
          !educations?.degree ||
          !educations?.articleshipStatus ||
          !educations.score12 ||
          !educations?.score10
        ) {
          console.log("pass 3");
          return false;
        }

        // pass 4
        const articleshipCompliance = data?.articleshipCompliance;
        if (
          !articleshipCompliance ||
          !articleshipCompliance?.orientationCourse ||
          !articleshipCompliance?.itt ||
          !articleshipCompliance?.expectedJoiningDate
        ) {
          console.log("pass 4");
          return false;
        }

        const articleshipHistory = data?.articleshipHistory;
        // pass 5
        if (
          !articleshipHistory ||
          !Array.isArray(articleshipHistory) ||
          articleshipHistory.length < 1
        ) {
          console.log("pass 5");
          return false;
        }

        // Test should be mandatory

        return true;
      })
      .catch(function (error) {
        console.log("hook useFields: Error in user data fetch:", error);
        return false;
      });
  };
  return {
    isMadatoryFilled,
  };
};
export default useFields;
