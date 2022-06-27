import axios from "axios";

export const getTotalCount = async (accessToken) => {
    const response = await axios.get("http://api.interview.michaelknyazev.com/api/v1/content/total", {
        headers: {
            'x-access-token': accessToken
        }
    })
    return response.data.result.count
}
