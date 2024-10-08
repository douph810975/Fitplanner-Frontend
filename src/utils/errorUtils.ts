const handleResponseStatus = (response: Response, errMsg: string) => {
    // handle http response, if 401, unauthorized so remove auth token;
    // if other response that are not ok, throw the corresponding error
    const { status, ok } = response;

    if (status === 401) {
        //localStorage.removeItem("authToken");
        //window.location.href = "/login";
        alert("Unauthorized. Please login again.");
        return;
    }

    if (status === 403) {
        localStorage.removeItem("authToken");
        window.location.href = "/";
        alert("Bad Request. Please try again.");
        return;
    }

    if (status === 500) {
        alert("Internal Server Error. Please try again.");
    }

    if (!ok) {
        throw Error(errMsg);
    }
};

export default handleResponseStatus;
