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
import { Box } from "@chakra-ui/react";
import { NAVBAR_HEIGHT } from "../utils/measurement";

import {
  specificMentorPageCheck,
  specificVacancyPageCheck,
  usersProfilePageCheck,
} from "../utils/regex/functions/specificPageCheckers";
import {
  NavWithCenterLogo,
  NavWithGetStarted,
  NavbarWithMoreOptions,
} from "../components/navigation/Navbar";
import DesktopFooter from "../components/navigation/Footer/DesktopFooter";

interface DesktopPageLayoutProps {
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
    return <NavbarWithMoreOptions />;
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
    return <DesktopFooter />;
  }
};
const DesktopPageLayout: React.FC<DesktopPageLayoutProps> = ({ children }) => {
  const location = useLocation();
  let shouldShowBottomPadding = true;
  const routeName = location.pathname;
  if (
    routeName === MAIN ||
    routeName === LOGIN ||
    routeName === SIGNUP ||
    routeName === LEARNINGS
  ) {
    shouldShowBottomPadding = false;
  }
  return (
    <div className="flex-col hidden w-full lg:flex ">
      <GetNavbar />
      <Box
        pb={shouldShowBottomPadding ? 16 : 0}
        pt={NAVBAR_HEIGHT}
        minH={`calc(100vh - ${NAVBAR_HEIGHT})`}
      >
        {children}
      </Box>
      <GetFooter />
    </div>
  );
};

export default DesktopPageLayout;
