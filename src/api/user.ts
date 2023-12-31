import API_INSTANCE from ".";

// eslint-disable-next-line
export const getUserById = async (id: any, token: string) => {
  const res = await API_INSTANCE.get(`/users/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res;
};
// eslint-disable-next-line
export const updateUserProfile = async (id: any, body: any, token: string) => {
  const res = await API_INSTANCE.patch(`/users/${id}`, body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res;
};

export const signout = async (data: any) => {
  const res = await API_INSTANCE.post("/users/signout", data, {
    headers: {
      'Authorization': `Bearer ${data.token}`
    }
  })
  return res
}
