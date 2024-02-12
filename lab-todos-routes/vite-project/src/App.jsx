import { Routes, Route } from 'react-router-dom'
import Navbar from "./components/Navbar"
import Home from './pages/Home'
import Todos from './pages/Todos'
import TodoDetail from './pages/TodoDetail'
import TodoEdit from './pages/TodoEdit'

function App() {
  return (
    <div data-bs-theme="dark">
      <Navbar />

      <div className="container my-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todos" element={<Todos />} />
          <Route path="/todos/:id" element={<TodoDetail />} />
          <Route path="/edit/:id" element={<TodoEdit />} />
        </Routes>
      </div>
    </div>
  )
}

export default App