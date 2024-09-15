export const baseurl = 'http://localhost:3000';

export function checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
  
    return Promise.reject(`Error ${res.status}`);
  }
  
export function askQuestion(question, token){
    return fetch(`${baseurl}/ask`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
            question
        }),
    }).then((res) => {
        return checkResponse(res);
    })
}

export function getQuestions(token) {
    return fetch(`${baseurl}/answer`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    }).then((res) => {
        return checkResponse(res).then((res) => {
            console.log(res);
            return res
        })
    })
}

export function getUserInfo(token){
    return fetch(`${baseurl}/users/me`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization : `Bearer ${token}`
        },
    }).then((res) => {
        return checkResponse(res);
    })
}