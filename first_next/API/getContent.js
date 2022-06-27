import axios from "axios";

export const getContent = async (accessToken, pageNumber, limitNumber) => {
    const response = await axios.get("http://api.interview.michaelknyazev.com/api/v1/content", {
        params: {
            page: pageNumber,
            limit: limitNumber
        },
        headers: {
            'x-access-token': accessToken
        }
    })
    return response.data.result
}