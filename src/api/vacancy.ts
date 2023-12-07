import API_INSTANCE from ".";

export const getAllVacancies = async () => {
  try {
    const res = await API_INSTANCE.get("/vacancy/all");
    if (res.status === 200) {
      return res.data?.data;
    }
  } catch (err) {
    console.log(err);
  }
};

export const createVacancy = async (body: any) => {
  const res = await API_INSTANCE.post("/vacancy/", body);
  return res;
};
export const getVacancyById = async (id: any) => {
  const res = await API_INSTANCE.get(`/vacancy/${id}`);
  return res;
};

export const updateVacancyById = async (id: any, body: any) => {
  const res = await API_INSTANCE.patch(`/vacancy/${id}`, body);
  return res;
};

export const updateApplicantByVacancyId = async (id: any, body: any) => {
  const res = await API_INSTANCE.patch(`/vacancy/applicant/${id}`, body);
  return res;
};

export const deleteVacancy = async (id: any) => {
  const res = await API_INSTANCE.delete(`/vacancy/${id}`);
  return res;
};
