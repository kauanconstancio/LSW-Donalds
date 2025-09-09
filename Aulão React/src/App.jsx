import "./App.css";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

// State (Estado) - usado para atualizar o componente (interface)

function App() {
  return (
    <div>
      <h1 className="text-red">Gerenciador de tarefas</h1>
      <AddTask />
      <Tasks />
    </div>
  );
}

export default App;
