import {
  SPECIFIC_LEARNING_PAGE_REGEX,
  SPECIFIC_MENTOR_PAGE_REGEX,
  SPECIFIC_VACANCY_PAGE_REGEX,
  USER_PROFILE_PAGE_REGEX,
} from "../patterns";

export const usersProfilePageCheck = (url: string): boolean => {
  const regex = USER_PROFILE_PAGE_REGEX;
  return regex.test(url);
};

export const specificVacancyPageCheck = (url: string): boolean => {
  const regex = SPECIFIC_VACANCY_PAGE_REGEX;
  return regex.test(url);
};

export const specificLearningPageCheck = (url: string): boolean => {
  const regex = SPECIFIC_LEARNING_PAGE_REGEX;
  return regex.test(url);
};

export const specificMentorPageCheck = (url: string): boolean => {
  const regex = SPECIFIC_MENTOR_PAGE_REGEX;
  return regex.test(url);
};
