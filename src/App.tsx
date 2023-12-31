import "./App.css";
import MainPage from "./pages/MainPage";
import {
  COURSE_DETAIL,
  EXPERIENCE,
  HOME,
  HOMENEW,
  LEARNINGS,
  LOGIN,
  MAIN,
  MENTORSHIPS,
  MENTOR_BOOKING,
  PRIVACY_POLICY,
  RAGEUP_TEST,
  REFUND_POLICY,
  SIGNUP,
  SPECIFIC_MENTOR,
  SPECIFIC_SUBJECT,
  SPECIFIC_USER,
  SPECIFIC_VACANCY,
  TERMS_AND_CONDITIONS,
  VACANCIES,
  CONTACT
} from "./routes/routeNames";
import HomePage from "./pages/HomePage";
import HomePageNew from "./pages/HomePageNew";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import UserProfilePage from "./pages/UserProfilePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import VacanciesPage from "./pages/VacanciesPage";
import MentorshipsPage from "./pages/MentorshipsPage";
import SpecificVacancyPage from "./pages/SpecificVacancyPage";
import ExperiencePage from "./pages/ExperiencePage";
import SpecificMentorPage from "./pages/MentorshipsPage/Pages/SpecificMentorPage";
import MentorBookingPage from "./pages/MentorshipsPage/Pages/MentorBookingPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsAndConditionsPage from "./pages/TermsAndConditionsPage";
import ReturnPolicyPage from "./pages/RefundPolicyPage";
import Logout from "./pages/logout";
import CourseDetailPage from "./domains/Learnings/pages/CourseDetailPage";
import LearningsPage from "./domains/Learnings";
import SpecificSubjectPage from "./domains/Learnings/pages/SpecificSubjectPage";
import RageupTestPage from "./pages/RageupPage";
import ContactUsPage from "./pages/ContactUsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={HOMENEW} element={<HomePage />} />
        <Route path={HOME} element={<HomePageNew />} />
        <Route path={MAIN} element={<MainPage />} />
        <Route path={LOGIN} element={<LoginPage />} />
        <Route path={"/logout"} element={<Logout />} />
        <Route path={SIGNUP} element={<SignUpPage />} />

        {/* Rage up test */}
        <Route path={RAGEUP_TEST} element={<RageupTestPage />} />

        {/* profile */}
        <Route path={SPECIFIC_USER} element={<UserProfilePage />} />
        <Route path={EXPERIENCE} element={<ExperiencePage />} />

        {/* vacancies */}
        <Route path={VACANCIES} element={<VacanciesPage />} />
        <Route path={SPECIFIC_VACANCY} element={<SpecificVacancyPage />} />

        {/* learnings */}
        <Route path={LEARNINGS} element={<LearningsPage />} />
        <Route path={COURSE_DETAIL} element={<CourseDetailPage />} />
        <Route path={SPECIFIC_SUBJECT} element={<SpecificSubjectPage />} />

        {/* mentorships */}
        <Route path={MENTORSHIPS} element={<MentorshipsPage />} />
        <Route path={SPECIFIC_MENTOR} element={<SpecificMentorPage />} />
        <Route path={MENTOR_BOOKING} element={<MentorBookingPage />} />

        {/* others */}
        <Route path={PRIVACY_POLICY} element={<PrivacyPolicyPage />} />
        <Route
          path={TERMS_AND_CONDITIONS}
          element={<TermsAndConditionsPage />}
        />
        <Route path={REFUND_POLICY} element={<ReturnPolicyPage />} />
        <Route path={"*"} element={<div>Page not found - custom page</div>} />
        <Route path={CONTACT} element={<ContactUsPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
