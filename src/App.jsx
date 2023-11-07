import { Outlet,Link } from 'react-router-dom';
import './App.css';
function App() {
  return (
    <div className="mybox">
        <h1 className='mybox'>React Application developed by Supraja pamula</h1>
        <Link to="/counter">Counter</Link>&nbsp;&nbsp;
        <Link to="/todolist">Todolist</Link>&nbsp;&nbsp;
        <Outlet></Outlet>
    </div>
  );
}

export default App;
