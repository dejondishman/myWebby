import './App.css';
import Content from './Components/Content'
import About from './Components/About/About'
import Project from './Components/Project/Project';
import ProjectList from './Components/ProjectList/ProjectList';
function App() {
  return (
    <div className="App">
      <Content/>
      <About/>
      <ProjectList/>
    </div>
  );
}

export default App;
