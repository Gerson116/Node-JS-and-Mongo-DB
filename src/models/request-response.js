

const requestResponse = (message, info, pager = 0) => {
    let response = {
        "message": message,
        "data": info,
        "pager": pager
    }
    return response;
}

module.exports = requestResponse;