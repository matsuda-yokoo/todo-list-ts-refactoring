import "./style.css";
import TodoList from "./components/TodoList";
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <div style={{ margin: '2rem' }}>
      <RecoilRoot>
        <TodoList/>
      </RecoilRoot>
    </div>
  )
}

 export default App;