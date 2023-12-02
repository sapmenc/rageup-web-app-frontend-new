import API_INSTANCE from ".";

export const getAllMentors = async () => {
    const res = await API_INSTANCE.get("/mentor/all");
    return res
};

export const createMentor = async (body: any) => {
    const res = await API_INSTANCE.post("/mentor/", body);
    return res;
};
export const getMentorById = async (id: any) => {
    const res = await API_INSTANCE.get(`/mentor/${id}`);
    return res;
};

export const updateMentor = async (id: any, body: any) => {
    const res = await API_INSTANCE.patch(`/mentor/${id}`, body);
    return res;
};

export const deleteMentor = async (id: any) => {
    const res = await API_INSTANCE.delete(`/mentor/${id}`);
    return res;
};
