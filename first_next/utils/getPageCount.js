

export const getTotalPages = (totalCount, limit) => {
    return Math.ceil(totalCount / limit)
}

export const getPagesArray = (page) => {
    let result = []
    let decimal = page - Math.floor(page / 10)
    if (page >= 0) {
        for (let i = decimal; i < decimal + 10; i++) {
            result.push(i)
        }
    }




    return result
}