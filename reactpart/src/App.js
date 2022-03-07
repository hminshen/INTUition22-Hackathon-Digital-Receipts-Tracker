import receiptsview from './receiptsview';
import { HashRouter, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
    <div className="App">
      <Switch>
          <Route exact path="/" component={receiptsview} />
      </Switch>    
    </div>
    </HashRouter>
  );
}

export default App;
