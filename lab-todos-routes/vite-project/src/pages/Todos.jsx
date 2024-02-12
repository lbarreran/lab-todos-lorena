import { useEffect, useState } from "react";
import TodoCard from "../components/TodoCard";
import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader';
import { getTodos } from "../services/todosService";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTodos()
      .then((todos) => {
        setTodos(todos);
        setLoading(false);
      })
      .catch((error) => console.error(error))
  }, [])

  return (
    <div>
      <h1 className="bg-primary-subtle text-light p-3 rounded">Lista de To-dos</h1>

      {
        loading
        ? (
          <div className="d-flex justify-content-center mt-2">
            <ClimbingBoxLoader color="#031633" />
          </div>
        ) : (
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {todos.map((todo) => (
              <div key={todo.id} className="col">
                <TodoCard {...todo} />
              </div>
            ))}
          </div>
        )
      }

    </div>
  )
}

export default Todos;