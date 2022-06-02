import axios from "axios";

function getTodos() {
    return axios.get('https://62986901e67470ca4dec7f3b.endapi.io/todos');
}

function addToServer(data) {
    return axios.post('https://62986901e67470ca4dec7f3b.endapi.io/todos', data);
}

function changeStatus(id, data) {
    return axios.put(`https://62986901e67470ca4dec7f3b.endapi.io/todos/${id}`, data);
}

function deleteFromServer(id) {
    return axios.delete(`https://62986901e67470ca4dec7f3b.endapi.io/todos/${id}`)
}


function EditInServer(id, data) {
    return axios.put(`https://62986901e67470ca4dec7f3b.endapi.io/todos/${id}`, data)
}


export { getTodos, addToServer, changeStatus, deleteFromServer, EditInServer }