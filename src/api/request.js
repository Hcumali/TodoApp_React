import axios from "axios";

var axios = axios.create();

export const getTodoList = () => {
    const headers = {
      "Content-Type": "application/json",
    };

    return new Promise((resolve, reject) => {
        axios({
            method: "GET",
            headers,
            url: "https://630de7b6b37c364eb70e5f89.mockapi.io/todos"
        })
        .then((response) => {
            resolve(response);
        })
        .catch((err) => {
            reject(err);
        });
    });
};