import API_INSTANCE from ".";

export const startRageUpTest = async (body: any, token: string) => {
  const res = await API_INSTANCE.post("/rageUpTest/startRageUpTest", body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res;
};
