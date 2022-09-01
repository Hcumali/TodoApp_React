import axios from "axios";
var axiosObject = axios.create();

const addTodo = (todo) => {
    const headers = {
      "Content-Type": "application/json",
    };

    const data = {
        content: todo
    }

    return new Promise((resolve, reject) => {
        axiosObject({
            method: "POST",
            headers,
            data: data,
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

const deleteTodo = (todoId) => {
    const headers = {
      "Content-Type": "application/json",
    };

    return new Promise((resolve, reject) => {
        axiosObject({
            method: "DELETE",
            headers,
            url: "https://630de7b6b37c364eb70e5f89.mockapi.io/todos/" + todoId
        })
        .then((response) => {
            resolve(response);
        })
        .catch((err) => {
            reject(err);
        });
    });
};

const updateTodo = (todo) => {
    const headers = {
      "Content-Type": "application/json",
    };

    return new Promise((resolve, reject) => {
        axiosObject({
            method: "PUT",
            headers,
            data: todo,
            url: "https://630de7b6b37c364eb70e5f89.mockapi.io/todos/" + todo.id
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

export { addTodo, deleteTodo, getTodoList, updateTodo };
