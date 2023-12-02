import API_INSTANCE from "."

export const getAllQuestions = async () => {
    try {
        const res = await API_INSTANCE.get('/question/all')
        if (res.status === 200) {
            return res.data?.data
        }
    }
    catch (err) {
        console.log(err)
    }
}

export const createQuestion = async (body: any) => {
    const res = await API_INSTANCE.post('/question/', body)
    return res
}
export const getQuestionById = async (id: any) => {
    const res = await API_INSTANCE.get(`/question/${id}`)
    return res
}

export const updateQuestion = async (id: any, body: any) => {
    const res = await API_INSTANCE.patch(`/question/${id}`, body)
    return res
}

export const deleteQuestion = async (id: any) => {
    const res = await API_INSTANCE.delete(`/party/${id}`)
    return res
}