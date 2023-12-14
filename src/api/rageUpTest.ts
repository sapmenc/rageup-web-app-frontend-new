import API_INSTANCE from "."

export const startRageUpTest = async (body:any) => {
    const res = await API_INSTANCE.get('/rageUpTest/startRageUpTest', body);
    return res;
};