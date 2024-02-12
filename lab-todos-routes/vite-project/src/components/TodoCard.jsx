import { Link } from "react-router-dom";

const TodoCard = ({ id, task, createdAt, status, onClick = () => {} }) => {
  return (
    <div className="card h-100">
      <div className="card-body">
        <h5 className="card-title">{task}</h5>
        <p className="card-text line-clamp">{createdAt}</p>
        <p className="card-text line-clamp">{status}</p>
        <div className="mt-2">
          <Link to={`/todos/${id}`} className="btn btn-primary mr-2" onClick={onClick}>
            Ver más detalles
          </Link>
          <Link to={`/edit/${id}`} className="btn btn-warning">
            Editar
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TodoCard;