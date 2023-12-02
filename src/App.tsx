import "./App.css";
import MainPage from "./pages/MainPage";
import {
  EXPERIENCE,
  HOME,
  LEARNINGS,
  LOGIN,
  MAIN,
  MENTORSHIPS,
  MENTOR_BOOKING,
  PRIVACY_POLICY,
  REFUND_POLICY,
  SIGNUP,
  SPECIFIC_MENTOR,
  SPECIFIC_USER,
  SPECIFIC_VACANCY,
  TERMS_AND_CONDITIONS,
  VACANCIES,
} from "./routes/routeNames";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import UserProfilePage from "./pages/UserProfilePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import VacanciesPage from "./pages/VacanciesPage";
import MentorshipsPage from "./pages/MentorshipsPage";
import LearningsPage from "./pages/LearningsPage";
import SpecificVacancyPage from "./pages/SpecificVacancyPage";
import ExperiencePage from "./pages/ExperiencePage";
import SpecificMentorPage from "./pages/MentorshipsPage/Pages/SpecificMentorPage";
import MentorBookingPage from "./pages/MentorshipsPage/Pages/MentorBookingPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsAndConditionsPage from "./pages/TermsAndConditionsPage";
import ReturnPolicyPage from "./pages/RefundPolicyPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={HOME} element={<HomePage />} />
        <Route path={MAIN} element={<MainPage />} />
        <Route path={LOGIN} element={<LoginPage />} />
        <Route path={SIGNUP} element={<SignUpPage />} />

        <Route path={SPECIFIC_USER} element={<UserProfilePage />} />
        <Route path={EXPERIENCE} element={<ExperiencePage />} />
        <Route path={VACANCIES} element={<VacanciesPage />} />
        <Route path={SPECIFIC_VACANCY} element={<SpecificVacancyPage />} />
        <Route path={LEARNINGS} element={<LearningsPage />} />
        <Route path={MENTORSHIPS} element={<MentorshipsPage />} />
        <Route path={SPECIFIC_MENTOR} element={<SpecificMentorPage />} />
        <Route path={MENTOR_BOOKING} element={<MentorBookingPage />} />
        <Route path={PRIVACY_POLICY} element={<PrivacyPolicyPage />} />
        <Route
          path={TERMS_AND_CONDITIONS}
          element={<TermsAndConditionsPage />}
        />
        <Route path={REFUND_POLICY} element={<ReturnPolicyPage />} />
        <Route path={"*"} element={<div>Page not found - custom page</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
