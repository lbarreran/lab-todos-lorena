import { useNavigate, useParams } from "react-router-dom";
import TodoForm from "../components/TodoForm";
import { useEffect, useState } from "react";
import { getTodosDetail, editTodo } from '../services/todosService'

const TodoEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [todo, setTodo] = useState({ task: '', createdAt: '', status: '' });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("ID:", id);
    getTodosDetail(id)
      .then((todoDB) => {
        setTodo(todoDB);
        setLoading(false);
      })
      .catch(error => console.log(error))
  }, [id]);

  const onSubmit = (values) => {
    console.log(id, values); // Añade esta línea
    return editTodo(id, values)
      .then(editedTodo => {
        navigate(`/todos`)
      })
      .catch(error => console.error(error));
  };
  


  return (
    <div>
      <h1>Editar To-do</h1>

      {loading ? (
        <p>Cargando...</p>
      ) : (
        <TodoForm initialValues={todo} onSubmit={onSubmit} />
      )}
      
    </div>
  )
}

export default TodoEdit;
