import API_INSTANCE from ".";

export const getAllArticleshipHistory = async (userId: any, token: string) => {
  const res = await API_INSTANCE.get(`/ah/all/${userId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res;
};

export const createArticleshipHistory = async (body: any, token: string) => {
  const res = await API_INSTANCE.post("/ah/", body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res;
};
export const getArticleshipHistoryById = async (
  historyId: any,
  token: string
) => {
  const res = await API_INSTANCE.get(`/ah/${historyId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res;
};

export const updateArticleshipHistory = async (
  historyId: any,
  body: any,
  token: string
) => {
  const res = await API_INSTANCE.patch(`/ah/${historyId}`, body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res;
};

export const deleteArticleshipHistory = async (
  historyId: any,
  token: string
) => {
  const res = await API_INSTANCE.delete(`/ah/${historyId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res;
};
