import http from './BaseService';

export const getTodos = () => http.get('/todos');

export const getTodosDetail = (id) => http.get(`/todos/${id}`)

export const deleteTodos = (id) => http.delete(`/todos/${id}`)

export const editTodo = (id, data) => http.put(`/todos/${id}`, data)