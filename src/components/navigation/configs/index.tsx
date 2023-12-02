import { IconType } from "react-icons";
import { CgProfile } from "react-icons/cg";
import { MdContentPasteSearch } from "react-icons/md";
import { FaBookReader, FaPeopleArrows } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { CiLogout } from "react-icons/ci";

import {
  LEARNING_PAGE_REGEX,
  MENTORSHIP_PAGE_REGEX,
  SETTINGS_PAGE_REGEX,
  USER_PROFILE_PAGE_REGEX,
  VACANCY_PAGE_REGEX,
} from "../../../utils/regex/patterns";
import { LEARNINGS, MENTORSHIPS, VACANCIES } from "../../../routes/routeNames";

export interface OptionProps {
  Icon?: IconType;
  label: string;
  pattern: RegExp;
  link: string;
}
export const mainOptions: OptionProps[] = [
  {
    label: "Profile",
    Icon: CgProfile,
    pattern: USER_PROFILE_PAGE_REGEX,
    link: "",
  },
  {
    label: "Vacancies",
    Icon: MdContentPasteSearch,
    pattern: VACANCY_PAGE_REGEX,
    link: VACANCIES,
  },
  {
    label: "Learning",
    Icon: FaBookReader,
    pattern: LEARNING_PAGE_REGEX,
    link: LEARNINGS,
  },
  {
    label: "Mentorship",
    Icon: FaPeopleArrows,
    pattern: MENTORSHIP_PAGE_REGEX,
    link: MENTORSHIPS,
  },
];

export const secondayOptions: OptionProps[] = [
  {
    label: "Settings",
    Icon: IoMdSettings,
    pattern: SETTINGS_PAGE_REGEX,
    link: "",
  },
  { label: "Logout", Icon: CiLogout, pattern: /^(?!.)/, link: "" },
];
