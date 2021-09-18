import Header from './components/Header';
import { Route } from 'react-router-dom';
import './default.scss';
import Homepage from './pages/Homepage';
import Registration from './pages/Registration';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <Route exact path="/" component={Homepage} />
        <Route path="/registration" component={Registration} />
      </div>
    </div>
  );
}

export default App;
