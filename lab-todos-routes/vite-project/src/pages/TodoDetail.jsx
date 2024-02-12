import { useCallback, useEffect, useState } from 'react';
import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader';
import {
  deleteTodos,
  getTodosDetail,
} from '../services/todosService';
import { useParams, useNavigate } from 'react-router-dom';

const TodoDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [todo, setTodo] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchTodoData = useCallback(() => {
    const promises = [getTodosDetail(id)];
    Promise.all(promises)
      .then(([todo]) => {
        setTodo(todo);
        setLoading(false);
      })
      .catch((e) => console.error(e));
  }, [id]);

  useEffect(() => {
    fetchTodoData();
  }, [fetchTodoData]);

  const onDelete = () => {
    if (confirm(`Estas a punto de borrar el libro: ${todo.task}`)) {
      deleteTodos(id)
        .then(() => {
          navigate('/todos');
        })
        .catch((e) => console.error(e));
    }
  };

  return (
    <div className="bg-primary-subtle text-light rounded p-3">
      {loading ? (
        <div className="d-flex justify-content-center mt-2">
          <ClimbingBoxLoader color="#fff" />
        </div>
      ) : (
        <div>
          <div className="row row-cols-1 row-cols-md-2">
            <div className="col">
              <h1>{todo.task}</h1>
              <p>{todo.createdAt}</p>
              <p>Status: {todo.status}</p>
              <button onClick={onDelete} className="btn btn-danger">
                Borrar To-do
              </button>
            </div>
          </div>
            </div>
      )}
    </div>
  );
};

export default TodoDetail;