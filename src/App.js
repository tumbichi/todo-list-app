import { TodoProvider } from "./contexts/TodoContext";
import Home from "./pages/Home";

function App() {
  return (
    <TodoProvider>
      <div>
        <Home />
      </div>
    </TodoProvider>
  );
}

export default App;
