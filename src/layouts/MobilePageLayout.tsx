import React from "react";
import { useLocation } from "react-router-dom";
import {
  HOME,
  LEARNINGS,
  LOGIN,
  MAIN,
  MENTORSHIPS,
  PRIVACY_POLICY,
  REFUND_POLICY,
  SIGNUP,
  TERMS_AND_CONDITIONS,
  VACANCIES,
} from "../routes/routeNames";
import {
  specificMentorPageCheck,
  specificVacancyPageCheck,
  usersProfilePageCheck,
} from "../utils/regex/functions/specificPageCheckers";
import { Box } from "@chakra-ui/react";
import { NAVBAR_HEIGHT } from "../utils/measurement";
import {
  NavWithCenterLogo,
  NavWithGetStarted,
  NavbarWithHamBurger,
} from "../components/navigation/Navbar";
import { MobileFooter } from "../components/navigation/Footer";

interface MobilePageLayoutProps {
  children: JSX.Element;
}
const GetNavbar = () => {
  const location = useLocation();
  const routeName = location.pathname;
  if (routeName === HOME) {
    return <NavWithGetStarted />;
  } else if (
    routeName === MAIN ||
    routeName === LOGIN ||
    routeName === SIGNUP ||
    routeName === PRIVACY_POLICY ||
    routeName === TERMS_AND_CONDITIONS ||
    routeName === REFUND_POLICY
  ) {
    return <NavWithCenterLogo />;
  } else if (
    usersProfilePageCheck(routeName) ||
    routeName === VACANCIES ||
    specificVacancyPageCheck(routeName) ||
    routeName === LEARNINGS ||
    routeName === MENTORSHIPS ||
    specificMentorPageCheck(routeName)
  ) {
    return <NavbarWithHamBurger />;
  }
};

const GetFooter = () => {
  const location = useLocation();

  const routeName = location.pathname;

  if (
    usersProfilePageCheck(routeName) ||
    routeName === VACANCIES ||
    specificVacancyPageCheck(routeName) ||
    routeName === LEARNINGS ||
    routeName === MENTORSHIPS ||
    specificMentorPageCheck(routeName) ||
    routeName === PRIVACY_POLICY ||
    routeName === TERMS_AND_CONDITIONS ||
    routeName === REFUND_POLICY
  ) {
    return <MobileFooter />;
  }
};
const MobilePageLayout: React.FC<MobilePageLayoutProps> = ({ children }) => {
  const location = useLocation();
  let shouldShowBottomPadding = true;
  const routeName = location.pathname;
  if (routeName === MAIN || routeName === LOGIN || routeName === SIGNUP) {
    shouldShowBottomPadding = false;
  }

  return (
    <Box
      pb={shouldShowBottomPadding ? 20 : 0}
      className="relative flex flex-col w-full lg:hidden"
    >
      <GetNavbar />
      <Box mt={NAVBAR_HEIGHT}>{children}</Box>
      <GetFooter />
    </Box>
  );
};

export default MobilePageLayout;
