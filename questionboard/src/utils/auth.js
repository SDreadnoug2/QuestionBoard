import { checkResponse } from "./api";
import { baseurl } from "./api";


export const register = (username, password) => {
    return fetch(`${baseurl}/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({username, password})
    }).then((res) => {
        console.log(res)
        checkResponse(res)
    });
}

export const login = (username, password) => {
    return fetch(`${baseurl}/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({username, password})
    }).then((res) => {
        console.log(res);
        return checkResponse(res)})
}


