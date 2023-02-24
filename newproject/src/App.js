import './App.css';
import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
import Ui from './Component/Ui';
import Form from './Component/Form';
import User from './Component/User';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={(
              <>
                <h1>Mohd. Kaif</h1>
                <div className="App">
                  <Ui />
                </div>
              </>
)}
          />
          <Route path="/login" element={<Form />} />
          <Route exact path="/user" element={<User />} />
        </Routes>
      </Router>

    </>
  );
}

export default App;
