import API_INSTANCE from ".";

export const getAllBookings = async () => {
    const res = await API_INSTANCE.get("/booking/all");
    return res
};

export const createBooking = async (body: any) => {
    const res = await API_INSTANCE.post("/booking/", body);
    return res;
};
export const getBookingById = async (id: any) => {
    const res = await API_INSTANCE.get(`/booking/${id}`);
    return res;
};

export const updateBookingById = async (id: any, body: any) => {
    const res = await API_INSTANCE.patch(`/booking/${id}`, body);
    return res;
};

export const deleteBookingById = async (id: any) => {
    const res = await API_INSTANCE.delete(`/booking/${id}`);
    return res;
};

export const getAvailableSlotsById = async (id: any) => {
    const res = await API_INSTANCE.get(`/booking/as/${id}`);
    return res;
};

export const getBookingByUserId = async (id: any) => {
    const res = await API_INSTANCE.get(`/booking/uId/${id}`);
    return res;
};