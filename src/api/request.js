import axios from "axios";
var axiosObject = axios.create();

const addTodo = (todo) => {
    const headers = {
      "Content-Type": "application/json",
    };

    const params = {
        content: todo
    }

    return new Promise((resolve, reject) => {
        axiosObject({
            method: "POST",
            headers,
            data: params,
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

const getTodoList = () => {
    const headers = {
      "Content-Type": "application/json",
    };

    return new Promise((resolve, reject) => {
        axiosObject({
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

export { addTodo, getTodoList };
