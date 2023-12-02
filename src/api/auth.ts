import API_INSTANCE from ".";

export const signin = async (data: any) => {
  const res = await API_INSTANCE.post("/auth/signin", data);
  return res;
};

export const signup = async (data: any) => {
  const res = await API_INSTANCE.post("/auth/signup", data);
  return res;
};

export const googleAuth = async (data: any) => {
  const res = await API_INSTANCE.post("/auth/google", data);
  return res;
};

export const verifyGoogleToken = async (token: any) => {
  const res = await API_INSTANCE.get(
    `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${token}`
  );
  return res;
};

export const signout = async (data: any) => {
  const res = await API_INSTANCE.post("/users/signout", data, {
    headers: {
      Authorization: `Bearer ${data.token}`,
    },
  });
  return res;
};

export const getCurrentUser = async (token: string) => {
  const res = await API_INSTANCE.post(
    "/auth/me",
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return res;
};
