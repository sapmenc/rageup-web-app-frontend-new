import API_INSTANCE from ".";

export const getAllCourses = async () => {
    const res = await API_INSTANCE.get("/course/all");
    return res
};

export const createCourse = async (body: any) => {
    const res = await API_INSTANCE.post("/course/", body);
    return res;
};
export const getCourseById = async (id: any) => {
    const res = await API_INSTANCE.get(`/course/${id}`);
    return res;
};

export const updateCourse = async (id: any, body: any) => {
    const res = await API_INSTANCE.patch(`/course/${id}`, body);
    return res;
};

export const deleteCourse = async (id: any) => {
    const res = await API_INSTANCE.delete(`/course/${id}`);
    return res;
};
